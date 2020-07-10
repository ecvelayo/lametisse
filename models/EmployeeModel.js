const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const Employee = instance.sequelize.define("Employee", {
    employee_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    code:{
        type: DataTypes.UUID,
    },
    dept_id:{
        type: DataTypes.INT,
        allowNull: false
    },
    employee_fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_midname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_lname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_department:{
        allowNull:false,
        type: DataTypes.STRING
    },
    employee_email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    employee_birthdate:{
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_contact:{
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    createdAt:"created_at",
    updatedAt:"updated_at"
    },
    {
        tableName: "MMT_Employee"
    },
)

exports.Employee = Employee;