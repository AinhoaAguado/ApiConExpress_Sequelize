
import express from 'express';
const router = express.Router();
import { getAllCategories, getCategoriesById, createCategories, updateCategories, deleteCategories} from '../controllers/categoriesController.js';

router.get('/', getAllCategories);
router.get('/:id', getCategoriesById);
router.post('/', createCategories);
router.put('/:id', updateCategories);
router.delete('/:id', deleteCategories);

export default router;