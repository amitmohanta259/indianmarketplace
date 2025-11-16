const express = require("express");
const router = express.Router();

const adminAuthController = require("../../controllers/admin/adminAuthController");
const refreshTokenController = require("../../controllers/refreshTokenController");

// ⛔ No jwtAuth — register and login are public
router.post("/register", adminAuthController.register);
router.post("/login", adminAuthController.login);

// ⛔ Do NOT protect logout with jwtAuth
// Logout only needs refreshToken (from cookie)
router.post("/logout", adminAuthController.logout);

// ✔ Refresh token endpoint (public — uses cookie)
router.post("/refresh-token", refreshTokenController);

module.exports = router;
