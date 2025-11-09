const baseAuth = require("../baseAuthController");
const tokenBlacklist = require("../../utils/tokenBlacklist");

exports.register = async (req, res) => {
  console.log("🏢 Enterprise registration called");
  return baseAuth.register(req, res);
};

exports.login = async (req, res) => {
  console.log("🏢 Enterprise login called");
  return baseAuth.login(req, res);
};

exports.logout = async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(400).json({ error: "Missing token" });

    tokenBlacklist.add(token);
    res.status(200).json({ message: "✅ Enterprise logout successful" });
  } catch (err) {
    console.error("🔥 Enterprise logout error:", err);
    res.status(500).json({ error: "Logout failed" });
  }
};
