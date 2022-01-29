const Pool = require('pg').Pool
const pool = new Pool({
    user: 'aviauser',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'aviasales'
})


module.exports = pool