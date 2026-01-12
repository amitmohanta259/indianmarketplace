const db = require("../../config/db");

const UserTypeModel = {
  getAllUserTypes: () => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT type_id, type_name, description
        FROM user_type
        ORDER BY type_id
      `;

      db.query(query, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
};

module.exports = UserTypeModel;
