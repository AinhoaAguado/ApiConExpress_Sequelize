import db from "../dataBase/db.js";
import { DataTypes } from "sequelize";

const CategoriesModel = db.define("categories", {
    category_id:{
        type: DataTypes.INTEGER(20),
        primaryKey: true,
        allowNull: false, 
        unique: true, 
        autoIncrement: true
    }, 
    category_name:{
        type: DataTypes.STRING(20),
        allowNull: false, 
        unique: true
    },
    subCategory_name:{
        type: DataTypes.STRING(20),
        allowNull: false, 
        unique: true
    }

},{
    timestamps: false
})

export default CategoriesModel; 