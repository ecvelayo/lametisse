const {DataTypes} = require("sequelize");
const instance = require("./dbconnection");    
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
const Account = instance.sequelize.define("Account", {
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    code:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    account_type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    company:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    position:{
        type: DataTypes.STRING,
        allowNull: false
    },
    branch: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    deleted_at:{
        type: DataTypes.DATE,
        allowNull: true
    }
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "MMT_Accounts"
    },
)

exports.Account = Account;