const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const Company = instance.sequelize.define("Company", {
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true, 
        autoIncrement: true
    },
    code:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    deleted_at:{
        type: DataTypes.DATE,
        allowNull: false
    }},
    {
        tableName: "MMT_Companies",
        createdAt: "created_at",
        updatedAt: "updated_at"
    });

exports.Company = Company;