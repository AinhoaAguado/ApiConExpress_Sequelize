import db from "../dataBase/db.js";
import { DataTypes } from "sequelize";

const BrandsModel = db.define("brands", {
    brand_id:{
        type: DataTypes.INTEGER(20), 
        primaryKey: true,
        allowNull: false, 
        unique: true, 
        autoIncrement: true,
    }, 
    brand_name:{
        type: DataTypes.STRING(20), 
        allowNull: false,
        unique: true
    }, 
    supplier:{
        type: DataTypes.STRING(20), 
        allowNull: false,
        unique: true
    }
},{
    timestamps: false
})

export default BrandsModel; 