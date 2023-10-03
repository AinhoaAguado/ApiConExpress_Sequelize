import express from 'express';
import cors from 'cors';
//import db from './src/dataBase/db.js';
import productsRouter from './src/routes/productsRouter.js';
import categoriesRouter from './src/routes/categoriesRouter.js';
//app.js o server.js
// define el servidor
//escucha el puerto
//que use el metodo http 

// const express = require('express');  //importar antigua
//const cors = require('cors');
//const app = express();
//const PORT = 3000; 

export const app = express()
app.get('/', (_req,res) => {
    res.send('Api ok')
})


app.use(cors()); // Middleware para permitir solicitudes desde diferentes dominios
app.use(express.json()); // Middleware para parsear JSON en las solicitudes

// Rutas
//const productsRouter = require('./routes/productsRouter.js'); // Define tus rutas en un archivo separado
app.use('/products', productsRouter); // Todas las rutas relacionadas con productos estarán bajo /home
app.use('/categories', categoriesRouter);
/*
const usersRouter = require('./routes/usersRouter.js'); 
app.use('/Users', usersRouter); 

const brandsRouter = require('./routes/brandsRouter.js'); 
app.use('/Brands', brandsRouter); 

const categoriesRouter = require('./routes/categoriesRouter.js'); 
app.use('/Categories', categoriesRouter); 


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});*/
/*
export const server = app.listen(0, () => {
    console.log('server up in', server.address().port)
})*/



export const server = app.listen(8085, () => {
    console.log('server up in http://localhost:8085')
})


/*
const db = require('./db');
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Brand = require('./Brand');

// Sincronizar modelos con la base de datos
db.sync()
  .then(() => {
    console.log('Tablas creadas (si no existen) en la base de datos.');
  })
  .catch(error => {
    console.error('Error al sincronizar modelos:', error);
  });*/

