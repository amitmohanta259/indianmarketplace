const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admin/superAdminUserController');
const tenantMiddleware = require('../../middlewares/tenantMiddleware');
const jwtAuth = require("../../middlewares/jwtAuth");

// ✅ Apply middlewares
router.use(tenantMiddleware);
router.use(jwtAuth);

// ✅ Routes
router.get('/', controller.getAll.bind(controller));
router.post('/', controller.create.bind(controller));

// ✅ Add logout route
router.post('/logout', controller.logout.bind(controller));

module.exports = router;
