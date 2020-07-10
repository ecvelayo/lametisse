const connection = require("../models/dbconnection");
const instance = require("../models/AccountModel");


exports.create = async (req, res) => {
    console.log(req.body);
    await instance.User.create({admin_type: req.body.type, admin_user: req.body.username, admin_password: req.body.password});
}
// const columns = "(admin_type, code, admin_user, admin_password, created_at)";
// const moment = require("moment");
// const table = "dbo.MMT_Admin";
// const now = moment().format("YYYY-MM-DD HH:mm:ss");

// //using promises to connect to pool and query
// exports.login = async (req,res) => {
//     await connection.pool.connect().then(pool =>{
//         return pool.query("SELECT * FROM "+table+" WHERE admin_user ='"+ req.body.username +"' AND admin_password = '"+req.body.password+"'");
//     }).then(result =>{
//         //manipulate result here
//         res.send(result);
//     }).then(()=>{
//         return connection.pool.close();
//     })
// }
// exports.loginUser = async (req, res) => {
//     await connection.pool.connect().then(pool =>{
//         console.log("SELECT * FROM "+table+" WHERE admin_user ='"+ req.body.username+"' AND admin_password='" + req.body.password +"' AND deleted_at = NULL")
//         return pool.query("SELECT * FROM "+table+" WHERE admin_user ='"+ req.body.username+"' AND admin_password='" + req.body.password +"' AND deleted_at IS NULL");
//     }).then(result =>{
//         //manipulate result here
//         console.log(result.recordset[0].admin_type);
//         //employee user redirect
//         if (result.rowsAffected == 1 && result.recordset[0].admin_type=="EMPLOYEE"){
//             res.redirect("/employee/login?id="+result.recordset[0].code);
//         }else{
//             //admin user redirect
//             res.send("Username and password does not match");
//         }
//     }).then(()=>{
//         return connection.pool.close();
//     })
// }

// exports.create = async (req,res) => {
//     console.log("Creating");
//     await connection.pool.connect().then(pool => {
//         return pool.query("SELECT * FROM "+table+" WHERE admin_user='"+req.body.username+"'");
//     }).then(result =>{
//         if (result.rowsAffected==1){
//             res.send("Not unique")
//             return "false"
//         }else if (req.body.currentUser == "ADMIN"){
//             let data = {};
//             data.username = req.body.username;
//             data.password = req.body.password;
//             data.type = req.body.userType;
//             data.created = moment().format("YYYY-MM-DD HH:mm:ss");
//             data.deleted = null;
//             //MSSQL Format
//             data = "('"+data.type+"', NEWID(), '"+data.username+"','"+data.password+"',CONVERT(DATETIME, '"+data.created+"', 103))";
//             create(data,table, res);
//         }
//     })
// }

// exports.approve = () => {
//     //TODO: APPROVE EMPLOYEE REGISTRATION AND ELEVATE EMPLOYEE STATUS FROM NOT_VERIFIED TO VERIFIED
// }

// exports.createDepartment = () => {
//     //TODO: CREATE DEPARTMENT AND ASSIGN PEOPLE PER DEPARTMENT
// }

// exports.read = (req, res) => {
//     read(req.body, table, res);
// }

// exports.update = async (req, res) => {
//     //route for update
//     update(data);
// }

// create = async (data, table, res) => {
//     console.log(data);
//     await connection.pool.connect().then(pool =>{
//         return pool.query("INSERT INTO "+table+" "+columns+" VALUES "+data);
//     }).then(result=>{
//         res.send(result);
//     }).then(()=>{
//         return connection.pool.close();
//     }); 
// }

// read = async (data, table, res) => {
//     console.log("Reading");
//     await connection.pool.connect().then(pool =>{
//         return pool.query("SELECT * FROM "+table+" WHERE deleted_at IS NULL AND code='"+data.code+"'")
//     }).then(result=>{
//         res.send(result)
//     }).then(()=>{
//         return connection.pool.close();
//     })
// }

// update = async (data) => {
//     await connection.pool.connect().then(pool =>{
//         //UPDATE PROFILE AND ACCOUNT DETAILS HERE
//     })
// }
// //deleting accounts
// exports.deleteAccount = async (req, res) => {
//     await connection.pool.connect().then(pool =>{
//         //DELETE PROFILE (SET DELETED_AT)
//         return pool.query("UPDATE "+table+" SET deleted_at=CONVERT(DATETIME,'"+now+"', 103) WHERE code='"+req.body.code+"'");
//     }).then(result=>{
//         res.send(result.rowsAffected);
//     }).then(()=>{
//         connection.pool.close();
//     })
// }