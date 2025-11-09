const superAdminUserModel = require('../../models/admin/superAdminUserModel');
const tokenBlacklist = require('../../utils/tokenBlacklist'); // ✅ Add this import

class SuperAdminUserController {
    async getAll(req, res) {
        try {
            const users = await superAdminUserModel.getAll(req.tenantId);
            res.json(users);
        } catch (err) {
            console.error('🔥 getAll Error:', err);
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const id = await superAdminUserModel.create(req.body, req.tenantId);
            res.status(201).json({ message: 'Super admin user created', id });
        } catch (err) {
            console.error('🔥 create Error:', err);
            res.status(500).json({ error: err.message });
        }
    }

    // ✅ Secure logout method using blacklist
    async logout(req, res) {
        try {
            const token = req.headers["authorization"]?.split(" ")[1];
            if (!token) return res.status(400).json({ error: "Missing token" });

            tokenBlacklist.add(token); // ⛔ add token to blacklist
            res.status(200).json({ message: "Logout successful" });
        } catch (err) {
            console.error("🔥 logout Error:", err);
            res.status(500).json({ error: "Logout failed" });
        }
    }
}

module.exports = new SuperAdminUserController();
