import db from "../dataBase/db.js";
import { DataTypes } from "sequelize";

const ProductsModel = db.define("products",
 {
    product_id:{
        type: DataTypes.INTEGER(20),
        primaryKey: true,
        allowNull: false, 
        unique: true, 
        autoIncrement: true
    }, 
    product_name:{
        type: DataTypes.STRING(20),
        allowNull: false, 
        unique: true
    }, 
    product_description:{
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    product_price:{
        type: DataTypes.INTEGER(6),
        allowNull: false
    }, 
    category_id:{
        type: DataTypes.INTEGER(20),
        allowNull: false,
        references: {
            model: 'categories', 
            key: 'category_id'
        }
    }, 
    brand_id:{
        type: DataTypes.INTEGER(20),
        allowNull: false,
        references: {
            model: 'brands', 
            key: 'brand_id'
        }
    }, 
    product_stock_units:{
        type: DataTypes.INTEGER(6),
        allowNull: false, 
    }
},{
    timestamps: false
});

export default ProductsModel; 