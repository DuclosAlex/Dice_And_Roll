const { Client } = require('pg');

const client = new Client({
    user: 'root',
    database: 'dice_db',
    password: 'root',
    port: '5432',
    host: "192.168.1.18"
    // TODO: use the IPv4 adress to work, windows have some issue to work with docker container
    // the ipv4 adress can be find with the ipconfig command in CMD
    // TODO: need to check to fully understand this setup
    // max: 20,
    // idleTimeoutMillis : 0,
    // connectionTimeoutMillis : 0
});

client.connect();

// DON'T CONNECT TO POOL HERE, IT WAS PROBABLY THIS WHO MAKE THE APP CRASHED, BECAUSE THE CONNECT WAS MADE AND MAINTAIN WHEN APP STARTED
// pool.connect();

module.exports = client;