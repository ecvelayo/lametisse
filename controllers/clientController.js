const instance = require("../models/ClientModel");

exports.create = async (req) => {
    let ret = await instance.Client.create(
        {
            client_user: req.user,
            client_pass: req.pass,
            client_fname: req.fname,
            client_lname: req.lname,
            client_contact: req.contact,
            client_address: req.address,
            client_birthdate: req.birthdate
        }
    )
    console.log(ret);
    return ret;
}

exports.retrieve = async (req) => {
    let ret = await instance.Client.findAll({
        where:{
            client_fname:  req.fname,
            client_lname: req.lname
        }
    })
    console.log(ret);
    return ret;
}

exports.update = async (req) => {
    let ret = await instance.Client.update({
        client_fname : req.fname,
        client_lname : req.lname,
        client_contact : req.contact,
        client_address : req.address
    }, {where : 
        {
            client_id : req.id
        }
    });
}