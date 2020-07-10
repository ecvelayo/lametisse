const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    

const Department = instance.sequelize.define("Department", {
    dept_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dept_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dept_branch:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:false,
    updatedAt:false
    },
    {
        tableName: "MMT_Department"
    },
)

exports.Department = Department;