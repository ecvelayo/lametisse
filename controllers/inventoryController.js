const instance = require("../models/InventoryModel");

exports.create = async (req) => {
    let ret = await instance.Inventory.create({
        product_barcode: req.barcode,
        product_price: req.price,
        product_name: req.name,
        current_stock: req.stock
    });
    return ret;
}

exports.retrieve = async (req) => {
    if ("inventory_id" in req){
        let ret = await instance.Inventory.findAll({where:{
            inventory_id: req.inventory_id
        }});
    }else{
        let ret = await instance.Inventory.findAll({offset: req.offset, limit: req.limit});
    }
    return ret;
}

exports.update = async (req) => {
    let ret = await instance.Inventory.update({
        product_name: req.name,
        product_price: req.price
    }, {where:{
        product_barcode: req.barcode
    }});
    return ret;
}

exports.delete = async (req) => {
    let ret = await instance.Inventory.delete({where:{product_barcode:req.barcode}})
    return ret;
}

exports.updateBarcode = async (req) => {
    let ret = await instance.Inventory.update({
        product_barcode: req.barcode
    }, {where:{
        inventory_id: req.id
    }});
    return ret;
}