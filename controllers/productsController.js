const inventory = require("./inventoryController");
const account = require("./accountController");

exports.addProduct = async (req, res) => {
    let auth = await account.retrieveType({user: req.body.user});
    if (auth.admin_type == "ADMIN"){
        let products = await inventory.create(req.body)
        console.log(products);
        if (products[0] == 1){
            return true;
        }else{  
            return false;
        }
    }
}

exports.addBarcode = async (req,res) => {
    let auth = await account.retrieveType({user: req.body.user});
    if (auth.admin_type == "ADMIN"){
        let products = await inventory.updateBarcode(req.body)
        if (products[0] == 1){
            //update is successful
            res.send(true)
            return true
        }else{
            res.send(false)
            return false
        }
    }
}