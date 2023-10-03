import { Sequelize } from "sequelize";
//const Sequelize = require('sequelize');

/*
import config from './config.js';

const env = process.env.NODE_ENV || 'development';
const { username, password, database, host, dialect } = config[env];
*/

//sequelize es un ORM
const db = new Sequelize('productos_tienda_local', 'root', 'Inxpirius_88', {
//const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'tu_usuario_de_mysql', 'tu_contraseña_de_mysql', {
    host: 'localhost',
    dialect: 'mysql',
   // define:{timestamps: false}
  });

// Testear la conexión
db
  .authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });


  
//module.exports = db;
export default db;