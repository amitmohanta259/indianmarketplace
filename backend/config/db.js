const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_SERVER || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'IndianMarketplace',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log(`✅ Connected to MySQL at ${process.env.DB_SERVER}:${process.env.DB_PORT}`);
    connection.release();
  } catch (err) {
    console.error('❌ Database Connection Failed:', err.message);
    process.exit(1); // Exit if DB connection fails
  }
}

testConnection();

module.exports = pool;
