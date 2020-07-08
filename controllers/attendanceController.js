const { ConnectionPool } = require("mssql")

const connection = require("../models/dbconnection");
const table = "dbo.MMT_Attendance";
exports.timein = async (req, res) =>{
    console.log(req.body);
    res.send(req.body);
    await connection.pool.connect().then(pool=>{
        return pool.query("SELECT * FROM "+table+"WHERE attendanceInTime BETWEEN NOW AND TOMORROW");
    })
}