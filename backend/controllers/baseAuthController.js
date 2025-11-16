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

    const tenantName = req.headers["x-tenant-name"];

    if (!username || !password || !email || !tenantName) {
      return res.status(400).json({
        error: "Username, password, email, and x-tenant-name are required",
      });
    }

    try {
      // 🏢 Verify tenant exists and active
      const [tenants] = await pool.execute(
        "SELECT * FROM enterprise WHERE name = ? AND status = 'ACTIVE'",
        [tenantName]
      );

      if (!tenants.length) {
        return res.status(400).json({
          error: `Tenant '${tenantName}' does not exist or is inactive`,
        });
      }

      const enterprise_id = tenants[0].enterprise_id;
      const isIndianMarketPlace =
        tenantName.toLowerCase() === "indianmarketplace";

      // 🔍 Check for existing username
      const userTable = isIndianMarketPlace ? "super_admin_users" : "users";
      const idColumn = isIndianMarketPlace ? "admin_user_id" : "user_id";

      const [existing] = await pool.execute(
        `SELECT ${idColumn} FROM ${userTable} WHERE (username = ? OR email = ?) ${
          isIndianMarketPlace ? "" : "AND enterprise_id = ?"
        }`,
        isIndianMarketPlace
          ? [username, email]
          : [username, email, enterprise_id]
      );

      if (existing.length) {
        return res.status(409).json({ error: "Username or email already exists" });
      }

      // 🔐 Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user based on tenant
      if (isIndianMarketPlace) {
        await pool.execute(
          `INSERT INTO super_admin_users
          (first_name, middle_name, last_name, phone_number, email, username, password, status, creation_date, enterprise_id)
          VALUES (?, ?, ?, ?, ?, ?, ?, 'ACTIVE', NOW(), ?)`,
          [
            first_name || null,
            middle_name || null,
            last_name || null,
            phone_number || null,
            email,
            username,
            hashedPassword,
            enterprise_id.toString(),
          ]
        );
      } else {
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
      }

      res.status(201).json({ message: "✅ User registered successfully" });
    } catch (err) {
      console.error("❌ Register error:", err);
      res.status(500).json({ error: "Server error", details: err.message });
    }
  }

  // ---------------- LOGIN (username or email) ----------------
  async login(req, res) {
    const { username, password } = req.body;
    const tenantName = req.headers["x-tenant-name"];

    if (!username || !password || !tenantName) {
      return res.status(400).json({
        error: "Username (or email), password, and x-tenant-name are required",
      });
    }

    try {
      // 🏢 Validate tenant
      const [tenants] = await pool.execute(
        "SELECT * FROM enterprise WHERE name = ? AND status = 'ACTIVE'",
        [tenantName]
      );

      if (!tenants.length) {
        return res.status(400).json({
          error: `Tenant '${tenantName}' is invalid or inactive`,
        });
      }

      const enterprise = tenants[0];
      const enterprise_id = enterprise.enterprise_id;
      const isIndianMarketPlace =
        tenantName.toLowerCase() === "indianmarketplace";

      // 👤 Fetch user using username OR email
      let query, params;
      if (isIndianMarketPlace) {
        console.log("👑 Admin login called");
        query = `
          SELECT sau.*, e.name AS enterprise_name
          FROM super_admin_users sau
          JOIN enterprise e ON sau.enterprise_id = e.enterprise_id
          WHERE (sau.username = ? OR sau.email = ?)
            AND e.name = ?
            AND sau.status = 'ACTIVE'
        `;
        params = [username, username, tenantName];
      } else {
        console.log("🏢 Tenant user login called");
        query = `
          SELECT u.*, e.name AS enterprise_name
          FROM users u
          JOIN enterprise e ON u.enterprise_id = e.enterprise_id
          WHERE (u.username = ? OR u.email = ?)
            AND e.name = ?
            AND e.status = 'ACTIVE'
        `;
        params = [username, username, tenantName];
      }

      const [users] = await pool.execute(query, params);

      if (!users.length) {
        return res.status(401).json({ error: "Invalid username/email or password" });
      }

      const user = users[0];

      // 🧩 Debug info
      console.log("🧍 User:", user.username);
      console.log("🏢 Tenant:", tenantName);
      console.log("🔐 Stored hash:", user.password);
      console.log("🧾 Input password:", password);

      // ✅ Compare password
      let passwordMatch = await bcrypt.compare(password, user.password);

      // 🔄 Fallback: handle double-hash case
      if (!passwordMatch) {
        const inputHash = await bcrypt.hash(password, 10);
        if (inputHash === user.password) {
          passwordMatch = true;
          console.warn("⚠️ Password matched via fallback (possible double-hash detected)");
        }
      }

      console.log("Password match:", passwordMatch);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid username/email or password" });
      }

      // 🎟️ Create JWT token
      const token = jwt.sign(
        {
          sub: isIndianMarketPlace ? user.admin_user_id : user.user_id,
          username: user.username,
          enterprise_id,
          tenantName,
          type_id: user.type_id || null,
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
      res.status(500).json({
        error: "Server error",
        details: err.message,
      });
    }
  }
}

module.exports = new BaseAuthController();
