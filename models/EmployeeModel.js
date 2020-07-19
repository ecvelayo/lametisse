const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const Employee = instance.sequelize.define("Employee", {
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    code:{
        type: DataTypes.UUID,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        allowNull:false,
        type: DataTypes.STRING
    },
    sex:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted_at:{
        type: DataTypes.DATE,
        allowNull: false
    }
    },
    {
        createdAt:"created_at",
        updatedAt:"updated_at",
        tableName: "MMT_Employees"
    }
)

exports.Employee = Employee;