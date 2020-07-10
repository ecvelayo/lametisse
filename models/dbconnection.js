const sql = require("tedious");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("SALON", "lametisse", "Summer0000",{
    host: "appsalon.database.windows.net",
    dialect: "mssql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

try{
    sequelize.authenticate();
    console.log("DB connected");
}catch(e){
    console.log("Unable to connect");
}

exports.sequelize = sequelize;
// const config = {
//     user: "lametisse",
//     password: "Summer0000",
//     server: "appsalon.database.windows.net",
//     dateStrings: true,
//     database: "SALON",
//     pool:{
//         min: 10,
//         max: 50,
//     }
// }
// const pool = new sql.ConnectionPool(config);

// exports.pool = pool;


