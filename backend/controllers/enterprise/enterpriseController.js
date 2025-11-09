const model = require('../../models/enterprise/enterpriseModel');

class EnterpriseController {
    async getAll(req, res) {
        try {
            const data = await model.getAll();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const id = await model.create(req.body);
            res.status(201).json({ message: 'Enterprise created', id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new EnterpriseController();
