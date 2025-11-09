const pool = require('../../config/db');

class CustomerModel {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM customer');
        return rows;
    }

    async create(customer) {
        const sql = `INSERT INTO customer
        (username, password, creation_date, user_id, status, profile_pic, dob, gender, is_logged_in)
        VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?)`;
        const params = [
            customer.username, customer.password,
            customer.user_id, customer.status,
            customer.profile_pic, customer.dob, customer.gender,
            customer.is_logged_in
        ];
        const [result] = await pool.execute(sql, params);
        return result.insertId;
    }
}

module.exports = new CustomerModel();
