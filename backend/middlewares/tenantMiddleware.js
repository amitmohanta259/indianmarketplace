// tenantMiddleware.js
module.exports = (req, res, next) => {
  const tenant = req.headers["x-tenant-name"];
  if (!tenant)
    return res.status(400).json({ error: "Missing tenant name (x-tenant-name header)" });

  req.tenant = tenant;
  next();
};
