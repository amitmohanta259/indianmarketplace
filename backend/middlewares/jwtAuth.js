const jwt = require("jsonwebtoken");
const tokenBlacklist = require("../utils/tokenBlacklist"); // ✅ import blacklist

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const tenantName = req.headers["x-tenant-name"];

  if (!authHeader || !tenantName)
    return res.status(401).json({ error: "Missing token or tenant" });

  const token = authHeader.split(" ")[1];

  // 🚫 Check if token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ error: "User has been logged out" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Tenant validation
    if (decoded.tenantName && decoded.tenantName !== tenantName)
      return res.status(403).json({ error: "Tenant mismatch" });

    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ JWT verification failed:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
