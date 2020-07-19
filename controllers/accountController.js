const instance = require("../models/AccountModel");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const bcrypt = require("bcrypt");


// exports.create = async (req, verifyToken, res) => {
//     console.log(req.body);
//     await instance.Account.create({admin_type: req.body.type, admin_user: req.body.username, admin_password: req.body.password});
// }

exports.retrieveByCode = async (req, res) => {
    console.log(req.body)
    let ret = await instance.Account.findAll({where:{code: req.query.code}});
    console.log(ret);
    res.send(ret);
}

// function verifyToken(req, res, next){
//     const bearerHeader = req.headers['authorization'];
//     if (typeof bearerHeader !== 'undefined'){
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     }else{
//         res.sendStatus(403);
//     }
// }

exports.password = (password, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            console.log(hash);
            return hash;
        });
    });
}

exports.decrypt = async (req, res) => {
    bcrypt.compare("Testing", req.body.token, function(err, result){
        res.send(result);
    })
}

exports.create = async (req, res) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    let ret = await instance.Account.create({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        account_type: "USER",
        company: req.body.company,
        status: "pending",
        position: req.body.position,
        branch: req.body.branch,
    })
    res.send(ret)
}

exports.login = async (req, res) => {
    //testing, trial12345
    let ret = await instance.Account.findOne({where: {username: req.body.username, deleted_at:null}});
    if (bcrypt.compareSync(req.body.password, ret.password)){
        //res.send("username and password correct");
        const user = {
            id: ret.id,
            type: ret.type,
            user: ret.username
        };
        const token = jwt.sign({user: user}, 'secretkey12345')
        res.send({token: token, code: 200});
    }else{
        res.send("username and password incorrect");
    }
}

// exports.create = async (req, res) => {
//     const token = req.body.token;
//     if (typeof req.body.token == 'undefined'){
//         res.sendStatus(403);
//     }else{
//         payload = jwt.verify(token, 'secretkey12345')
//     }
//     if (payload.user == 'undefined'){
//         res.sendStatus(403);
//         res.send("Forbidden");
//     }
//     console.log(payload.user);
//     res.sendStatus(200);
//     console.log("Forbidden");
// }

exports.retrieveType = async (req, res) => {
    console.log(req.user);
    let ret = await instance.Account.findAll({
        where:
        {
            username: req.username
        }, 
        attributes:['admin_type']

    });
    console.log(ret);
    return(ret);
}

exports.retrieveActive = async (req, res) => {
    let ret = await instance.Account.findAll({where:{deletedAt: null}});
    res.send(ret);
}

exports.retrieveByType = async (req, res) => {
    let ret = await instance.Account.findAll({where:{admin_type: req.query.type }})
    res.send(ret);
}

exports.deleteByCode = async (req, res) => {
    let ret = await instance.Account.update({deletedAt: now},{where: {code: req.query.code}});
    res.send(ret);
}

exports.updatePassword = async (req, res) => {
    let ret = await instance.Account.update({admin_password: req.body.password, deletedAt: null}, {where: {code: req.body.code}});
    res.send(ret);
}

// exports.login = async (req, res) => {
//     let ret = await instance.Account.findAll({where:{admin_user: req.body.user, admin_password: req.body.pass}});
//     if (ret.length > 0){
//         const user = {
//             id: ret[0].dataValues.admin_id,
//             type: ret[0].dataValues.admin_type,
//             user: ret[0].dataValues.admin_user
//         };
//         const token = jwt.sign({user: user}, 'secretkey12345')
//         return ({token: token});
//     }else{
//         return false;
//     }
// }