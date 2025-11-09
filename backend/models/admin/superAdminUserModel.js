const pool = require('../../config/db');

class SuperAdminUserModel {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM super_admin_users');
        return rows;
    }

    async create(user) {
        const sql = `INSERT INTO super_admin_users
        (first_name, middle_name, last_name, phone_number, email, status, creation_date)
        VALUES (?, ?, ?, ?, ?, ?, NOW())`;
        const params = [user.first_name, user.middle_name, user.last_name, user.phone_number, user.email, user.status];
        const [result] = await pool.execute(sql, params);
        return result.insertId;
    }

    async getAdminUserDetail(user_id) {
        const [rows] = await pool.query(
            'SELECT * FROM super_admin_users WHERE admin_user_id = ?',
            [user_id]
        );
        return rows;
    }

}

module.exports = new SuperAdminUserModel();
