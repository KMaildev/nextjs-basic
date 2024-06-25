import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextcrud',
    connectionLimit: 10,
});

export async function query(sql, values) {
    const connection = await pool.getConnection();
    try {
        const [results] = await connection.query(sql, values || []);
        return results;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

export default pool;
