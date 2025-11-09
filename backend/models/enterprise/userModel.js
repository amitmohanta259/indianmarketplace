const pool = require('../../config/db');

class UserModel {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    }

    async create(user) {
        const sql = `INSERT INTO users
        (enterprise_id, username, password, first_name, middle_name, last_name, phone_number, email, type_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const params = [
            user.enterprise_id, user.username, user.password,
            user.first_name, user.middle_name, user.last_name,
            user.phone_number, user.email, user.type_id
        ];
        const [result] = await pool.execute(sql, params);
        return result.insertId;
    }
}

module.exports = new UserModel();
