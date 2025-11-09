const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/adminAuthController");
const jwtAuth = require("../../middlewares/jwtAuth");
const tenantMiddleware = require("../../middlewares/tenantMiddleware");

router.use(tenantMiddleware);

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/logout", jwtAuth, controller.logout);

module.exports = router;
