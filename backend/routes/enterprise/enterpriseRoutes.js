const express = require('express');
const router = express.Router();
const controller = require('../../controllers/enterprise/enterpriseController');

router.get('/', controller.getAll.bind(controller));
router.post('/', controller.create.bind(controller));

module.exports = router;
