const {DataTypes} = require("sequelize");
const instance = require("./dbconnection"); 
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
const Client = instance.sequelize.define("Client", {
    client_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    queue_number:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    client_user:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client_pass:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client_fname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client_lname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client_contact:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client_address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client_birthdate:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:"created_at",
    updatedAt = "updated_at"

    },
    {
        tableName: "MMT_Client"
    },
)

exports.Client = Client;