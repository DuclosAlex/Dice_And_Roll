const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    database: 'dice_db',
    password: 'root',
    port: 5432,
    host: '172.18.0.3'
});

pool.connect();

module.exports = pool;