const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const tenantName = req.headers["x-tenant-name"];

    if (!refreshToken)
      return res.status(401).json({ error: "Refresh token missing" });

    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ error: "Invalid refresh token" });

      if (decoded.tenantName !== tenantName)
        return res.status(403).json({ error: "Tenant mismatch" });

      const newAccessToken = jwt.sign(
        {
          sub: decoded.sub,
          username: decoded.username,
          enterprise_id: decoded.enterprise_id,
          tenantName: decoded.tenantName,
          type_id: decoded.type_id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      return res.json({ access_token: newAccessToken });
    });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};
