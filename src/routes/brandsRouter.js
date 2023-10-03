const express = require('express');
const router = express.Router();

const brandsController = require('../controllers/brandsController.js'); // Controladores: Define tus controladores en un archivo separado

// Rutas
router.get('/', brandsController.getAllProducts);
router.get('/:id', brandsController.getProductById);
router.post('/', brandsController.createProduct);
router.put('/:id', brandsController.updateProduct);
router.delete('/:id', brandsController.deleteProduct);

module.exports = brandsController;