const connection = require("../models/dbconnection");
const attendance = require("./attendanceController");
const moment = require("moment");
const table = "dbo.MMT_Employee";
const now = moment().format("YYYY-MM-DD HH:mm:ss");

exports.timeIn = async (req, res) => {
    console.log("In");
    await connection.pool.connect().then(pool=>{
        attendance.timein(req, res);
    })
}

exports.out = async (req, res) => {
    await connection.pool.connect().then(pool=>{

    })
}

exports.login = async (req, res) => {
    await connection.pool.connect().then(pool =>{
        return pool.query("SELECT * FROM dbo.MMT_Employee WHERE code='"+req.query.id+"'");
    }).then(result => {
        if (result.rowsAffected == 0){
            res.redirect("/employee/fillup?id="+req.query.id);
        }
    })
}

exports.sales = async (req,res) => {

}

exports.fillUpDetails = async (req, res) => {
    console.log(req.query.id);
    console.log("Fill Up Details");
    let data = req.body;
    let empFName = data.firstName;
}