import express from 'express';
const router = express.Router();
import { getAllProducts, getProductById, getProductByCategory, getProductByName, createProduct, updateProduct, deleteProduct} from '../controllers/productsController.js';  //, getProductById, createProduct, updateProduct, deleteProduct 

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/categories/:category_id', getProductByCategory);
router.get('/categories/:product_name', getProductByName);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;