const instance = require("../models/EmployeeModel");

exports.create = async (req, res) => {
    let uniquecheck = await instance.Employee.findAll({where:{employee_fname: req.body.fname, employee_midname: req.body.midname, employee_lname: req.body.lname}});
    console.log(uniquecheck);
    if (uniquecheck.length > 0){
        res.send("Duplicate employee");
    }else{
        let ret = await instance.Employee.create({
            code: req.body.code,
            dept_ID: req.body.deptid, 
            employee_fname: req.body.fname, 
            employee_midname: req.body.midname, 
            employee_lname: req.body.lname,
            employee_position: req.body.position,
            employee_department: req.body.department, 
            employee_email: req.body.email, 
            employee_birthdate: req.body.birthdate,
            employee_contact: req.body.contactnumber
        })
    }
    console.log(req.body);
    await instance.Employee.create({admin_type: req.body.type, admin_user: req.body.username, admin_password: req.body.password});
}

exports.listEmployees = async (req, res) => {
    let list = await instance.Employee.findAll();
    res.send(list);
}

exports.retrievebyID =  async (req, res) => {
    let ret = await instance.Employee.findAll({where:{
        employee_id: req.query.id
    }})
    res.send(ret);
}

exports.retrievebyCode = async (req) => {
    console.log(req);
    let ret = await instance.Employee.findAll({where:{
        code: req
    }})
    return ret;
}

exports.retrieveByName = async (req) => {
    let ret = await instance.Employee.findAll({where:{
        employee_fname: req.fname,
        employee_midname: req.midname,
        employee_lname: req.lname
    }})
    return ret;
}


// const moment = require("moment");
// const now = moment().format("YYYY-MM-DD HH:mm:ss");

// const connection = require("../models/dbconnection");
// const attendance = require("./attendanceController");
// const moment = require("moment");
// const table = "dbo.MMT_Employee";
// const columns = "(code, employee_fname, employee_midname, employee_lname, employee_position, employee_department, employee_email, employee_birthdate, employee_contact)";
// const now = moment().format("YYYY-MM-DD HH:mm:ss");

// exports.timeIn = async (req, res) => {
//     console.log("In");
//     await connection.pool.connect().then(pool=>{
//         attendance.timein(req, res);
//     })
// }

// exports.out = async (req, res) => {
//     await connection.pool.connect().then(pool=>{

//     })
// }

// exports.login = async (req, res) => {
//     await connection.pool.connect().then(pool =>{
//         return pool.query("SELECT * FROM dbo.MMT_Employee WHERE code='"+req.query.id+"'");
//     }).then(result => {
//         if (result.rowsAffected == 0){
//             res.redirect("/employee/fillup?id="+req.query.id);
//         }
//     })
// }

// exports.sales = async (req,res) => {

// }

// exports.fillUp = async (req, res) => {
//     console.log(req.query.id);
//     console.log("Reroute to Fill Up Page");
// }

// exports.fillUpDetails = async (req, res) => {
//     console.log(req.query.id);
//     console.log("Fill Up Details");
//     console.log(req.body);
//     let data = req.body;
//     let empFName = data.firstName;
//     let empMName = data.middleName;
//     let empLName = data.lastName;
//     let empPos = data.position;
//     let empDept = data.department;
//     let empEmail = data.email;
//     let empBirth = data.birthday;
//     let empContact = data.contact;
//     let passable = "('"+req.query.id+"','"+empFName+"','"+empMName+"','"+empLName+"','"+empPos+"','"+empDept+"','"+empEmail+"','"+empBirth+"','"+empContact+"')";
//     await connection.pool.connect().then(pool =>{
//         console.log("INSERT INTO "+table+" "+columns+" VALUES "+passable);
//         return pool.query("INSERT INTO "+table+" "+columns+" VALUES "+passable);
//     }).then(result =>{
//         if (result.rowsAffected == 0){
//             res.send("Error")
//         }else{
//             res.send("Added");
//         }
//     })
// }