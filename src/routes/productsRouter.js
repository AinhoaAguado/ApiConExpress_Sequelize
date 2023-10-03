/*const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js'); // Controladores: Define tus controladores en un archivo separado

// Rutas
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = productsController;
*/

import express from 'express';
const productsRouter = express.Router();
import { getAllProducts} from '../controllers/productsController.js';  //, getProductById, createProduct, updateProduct, deleteProduct 
// Controladores: Define tus controladores en un archivo separado

// Rutas
productsRouter.get('/', getAllProducts);
//productsRouter.get('/:id', getProductById);
//productsRouter.post('/', createProduct);
//productsRouter.put('/:id', updateProduct);
//productsRouter.delete('/:id', deleteProduct);

export default productsRouter;