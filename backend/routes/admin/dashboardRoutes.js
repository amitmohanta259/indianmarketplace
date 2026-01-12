const express = require("express");
const router = express.Router();
const DashboardController = require("../../controllers/admin/dashboard");

router.get("/dashboard/cards", DashboardController.getDashboardCards);

module.exports = router;
