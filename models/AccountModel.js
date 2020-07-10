const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
const Account = instance.sequelize.define("Account", {
    admin_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    code:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    admin_type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    admin_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin_password:{
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
        tableName: "MMT_Admin"
    },
)

exports.Account = Account;