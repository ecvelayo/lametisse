const connection = require("../models/dbconnection");
const attendance = require("./attendanceController");
const moment = require("moment");
const table = "dbo.MMT_Employee";
const columns = "(code, employee_fname, employee_midname, employee_lname, employee_position, employee_department, employee_email, employee_birthdate, employee_contact)";
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

exports.fillUp = async (req, res) => {
    console.log(req.query.id);
    console.log("Reroute to Fill Up Page");
}

exports.fillUpDetails = async (req, res) => {
    console.log(req.query.id);
    console.log("Fill Up Details");
    console.log(req.body);
    let data = req.body;
    let empFName = data.firstName;
    let empMName = data.middleName;
    let empLName = data.lastName;
    let empPos = data.position;
    let empDept = data.department;
    let empEmail = data.email;
    let empBirth = data.birthday;
    let empContact = data.contact;
    let passable = "('"+req.query.id+"','"+empFName+"','"+empMName+"','"+empLName+"','"+empPos+"','"+empDept+"','"+empEmail+"','"+empBirth+"','"+empContact+"')";
    await connection.pool.connect().then(pool =>{
        console.log("INSERT INTO "+table+" "+columns+" VALUES "+passable);
        return pool.query("INSERT INTO "+table+" "+columns+" VALUES "+passable);
    }).then(result =>{
        if (result.rowsAffected == 0){
            res.send("Error")
        }else{
            res.send("Added");
        }
    })
}