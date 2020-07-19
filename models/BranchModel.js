const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const Branch = instance.sequelize.define("Branch",{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    company_id:{
        type: DataTypes.BIGINT,
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
    contact_number:{
        type: DataTypes.STRING,
        allowNull: false
    },
    deleted_at:{
        type: DataTypes.DATE,
        allowNull: false
    }},
    {
        createdAt: "created_at",
        deletedAt: "deleted_at",
        tableName: "MMT_Branches"
    });
exports.Branch = Branch;