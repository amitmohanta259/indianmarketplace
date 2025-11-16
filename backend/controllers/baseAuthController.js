const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
require("dotenv").config();
const { generateTokens } = require("../utils/generateTokens");

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
      // Validate tenant
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

      const hashedPassword = await bcrypt.hash(password, 10);

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

  // ---------------- LOGIN ----------------
  async login(req, res) {
    const { username, password } = req.body;
    const tenantName = req.headers["x-tenant-name"];

    if (!username || !password || !tenantName) {
      return res.status(400).json({
        error: "Username (or email), password, and x-tenant-name are required",
      });
    }

    try {
      // Validate tenant
      const [tenants] = await pool.execute(
        "SELECT * FROM enterprise WHERE name = ? AND status = 'ACTIVE'",
        [tenantName]
      );

      if (!tenants.length) {
        return res.status(400).json({
          error: `Tenant '${tenantName}' is invalid or inactive`,
        });
      }

      const enterprise_id = tenants[0].enterprise_id;
      const isIndianMarketPlace =
        tenantName.toLowerCase() === "indianmarketplace";

      let query, params;
      if (isIndianMarketPlace) {
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

      // Compare password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid username/email or password" });
      }

      // ------------------------ GENERATE ACCESS + REFRESH TOKENS ------------------------
      const { accessToken, refreshToken } = generateTokens({
        sub: isIndianMarketPlace ? user.admin_user_id : user.user_id,
        username: user.username,
        enterprise_id,
        tenantName,
        type_id: user.type_id || null,
      });

      // ------------------------ SEND REFRESH TOKEN IN HTTP-ONLY COOKIE ------------------------
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // 🔥 Set true in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      // ------------------------ RESPONSE ------------------------
      return res.json({
        access_token: accessToken,
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
