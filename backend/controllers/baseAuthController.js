const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
require("dotenv").config();

class BaseAuthController {
  // ---------------- REGISTER ----------------
  async register(req, res) {
    const {
      username,
      password,
      email,
      first_name,
      middle_name,
      last_name,
      phone_number,
      type_id,
    } = req.body;

    const tenantName = req.tenant || req.tenantName;

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: "Username, password, and email are required" });
    }

    try {
      // 🏢 Verify tenant exists and active
      const [tenants] = await pool.execute(
        "SELECT * FROM enterprise WHERE name = ? AND status = 'ACTIVE'",
        [tenantName]
      );
      if (!tenants.length)
        return res
          .status(400)
          .json({ error: `Tenant '${tenantName}' does not exist or is inactive` });

      const enterprise_id = tenants[0].enterprise_id;

      // 🔍 Check if username already exists
      const [existing] = await pool.execute(
        "SELECT user_id FROM users WHERE username = ? AND enterprise_id = ?",
        [username, enterprise_id]
      );
      if (existing.length)
        return res.status(409).json({ error: "Username already exists" });

      // 🔐 Hash password and insert user
      const hashedPassword = await bcrypt.hash(password, 10);

      await pool.execute(
        `INSERT INTO users
        (enterprise_id, username, password, email, first_name, middle_name, last_name, phone_number, type_id, creation_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          enterprise_id,
          username,
          hashedPassword,
          email,
          first_name || null,
          middle_name || null,
          last_name || null,
          phone_number || null,
          type_id || 1,
        ]
      );

      res.status(201).json({ message: "✅ User registered successfully" });
    } catch (err) {
      console.error("❌ Register error:", err);
      res.status(500).json({ error: "Server error", details: err.message });
    }
  }

  // ---------------- LOGIN ----------------
  async login(req, res) {
    const { username, password } = req.body;
    const tenantName = req.tenant || req.tenantName;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      // 🏢 Validate tenant
      const [tenants] = await pool.execute(
        "SELECT * FROM enterprise WHERE name = ? AND status = 'ACTIVE'",
        [tenantName]
      );
      if (!tenants.length)
        return res
          .status(400)
          .json({ error: `Tenant '${tenantName}' is invalid or inactive` });

      const enterprise_id = tenants[0].enterprise_id;

      // 👤 Find user within that tenant
      const [users] = await pool.execute(
        "SELECT * FROM users WHERE username = ? AND enterprise_id = ?",
        [username, enterprise_id]
      );
      if (!users.length)
        return res.status(401).json({ error: "Invalid credentials" });

      const user = users[0];
      const valid = await bcrypt.compare(password, user.password);
      if (!valid)
        return res.status(401).json({ error: "Invalid credentials" });

      // 🎟️ Create JWT (contains tenant and user info)
      const token = jwt.sign(
        {
          sub: user.user_id,
          username: user.username,
          enterprise_id,
          tenantName,
          type_id: user.type_id,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_TTL_SECONDS || "1h" }
      );

      res.json({
        access_token: token,
        token_type: "Bearer",
        enterprise_name: tenantName,
      });
    } catch (err) {
      console.error("❌ Login error:", err);
      res.status(500).json({ error: "Server error", details: err.message });
    }
  }
}

module.exports = new BaseAuthController();
