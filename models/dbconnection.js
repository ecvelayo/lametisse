const sql = require("mssql");
const config = {
    user: "lametisse",
    password: "Summer0000",
    server: "appsalon.database.windows.net",
    dateStrings: true,
    database: "SALON",
    pool:{
        min: 10,
        max: 50,
    }
}
const pool = new sql.ConnectionPool(config);

exports.pool = pool;


