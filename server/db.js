const { user, password } = require("pg/lib/defaults")

const Pool = require("pg").Pool

const pool = new Pool({

    user: "postgres",
    password: "mystic200139",
    host: "localhost",
    port: "5432",
    database: "perntodo"
})

module.exports = pool