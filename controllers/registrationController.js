const employee = require("./employeeController");
const account = require("./accountController");
const client = require("./clientController");


//upon log-in, will check if said employee has details, if none, redirects to form for input
exports.loginDetails = async (req, res) => {
    let auth = await account.login(req,res)
    console.log(auth);
    //passed token here
    if (auth != false && auth.admin_type == "EMPLOYEE"){
        let checkInfo = await employee.retrievebyCode(auth.code)
        if (checkInfo.length > 0){
            res.send("Go to employee page")
        }else{
            res.send("Fill Up Details");
        }
    }else if (auth !=false && auth.admin_type == "ADMIN"){
        //go to dashboard
        res.send("Go to dashboard");
    }else{
        // if credentials are wrong
        res.send(false)
    }
}

exports.clientExists = async (req, res) => {
    let user = await client.retrieve({fname: req.query.fname , lname: req.query.lname});
    if (user.length > 0){
        //user exists, proceed with services
        return true;
    }else{
        //user does not exist
        return false;
    }
}

exports.employeeExists = async (req, res) => {
    let user = await employee.retrieveByName({fname: req.body.fname, midname: req.body.midname, lname: req.body.lname});
    if (user.length > 0){
        return true;
    }else{
        return false;
    }
}
