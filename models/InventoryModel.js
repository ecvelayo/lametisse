const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");  
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};  

const Inventory = instance.sequelize.define("Inventory", {
    inventory_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_barcode:{
        type: DataTypes.STRING,
        allowNull: true
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    current_stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    },
    {
        tableName: "MMT_Inventory",
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
)

exports.Inventory = Inventory;