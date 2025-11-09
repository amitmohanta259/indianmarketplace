const express = require("express");
const router = express.Router();
const tenantMiddleware = require("../../middlewares/tenantMiddleware");
const jwtAuth = require("../../middlewares/jwtAuth");
const adminAuthController = require("../../controllers/admin/adminAuthController");

// ✅ Tenant middleware required for Admin
router.post("/register", tenantMiddleware, adminAuthController.register);
router.post("/login", tenantMiddleware, adminAuthController.login);
router.post("/logout", tenantMiddleware, jwtAuth, adminAuthController.logout);

module.exports = router;
