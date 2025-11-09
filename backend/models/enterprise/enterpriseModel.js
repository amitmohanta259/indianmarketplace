const pool = require('../../config/db');

class EnterpriseModel {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM enterprise');
        return rows;
    }

    async create(ent) {
        const sql = `INSERT INTO enterprise
        (name, enterprise_type, status, phone_number, email_id, gst_number, address, creation_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`;
        const params = [ent.name, ent.enterprise_type, ent.status, ent.phone_number, ent.email_id, ent.gst_number, ent.address];
        const [result] = await pool.execute(sql, params);
        return result.insertId;
    }
}

module.exports = new EnterpriseModel();
