/*import db from "../dataBase/db.js";
import { DataTypes } from "sequelize";

const UsersModel = db.define("users", {
    user_id:{
        type: DataTypes.INTEGER(20), 
        primaryKey: true,
        allowNull: false, 
        unique: true, 
        autoIncrement: true,
    }, 
    user_name:{
        type: DataTypes.STRING(20),
        allowNull: false, 
        unique: true
    }, 
    user_email:{
        type: DataTypes.STRING(50),
        allowNull: false, 
        unique: true
    }, 
    user_password:{
        type: DataTypes.INTEGER(20),
        allowNull: false, 
        unique: true
    }, 
    user_phone:{
        type: DataTypes.INTEGER(12),
        allowNull: false, 
        unique: true, 
    }, 
},{
    timestamps: false,
})

export default UsersModel; */