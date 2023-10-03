import categoriesModel from "../models/categoriesModel.js";

// GET All ---------------  
export const getAllCategories = async (_req, res) => {
  try {
    const category = await categoriesModel.findAll();
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos.' });
  }
};

  // GET by ID ---------------  
export const getCategoriesById = async (req, res) => {
    try {
      const category = await categoriesModel.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el producto.' });
    }
  };
  
  // POST ---------------  
  export const createCategories = async (req, res) => {
    try {
        const category = await categoriesModel.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// PUT/PATH ---------------  
export const updateCategories = async (req, res) => {
  try {
      const category = await categoriesModel.findByPk(req.params.id);
      if (category) {
          await category.update(req.body);
          res.status(200).json(category);
      } else {
        //res.status(404).send('Product with the specified ID does not exist');
          res.status(404).json({messagge: 'Product with the specified ID does not exist'});
      }
  } catch (error) {
      res.status(500).json({messagge: error.message});
  }
};

// Función para eliminar un producto ---------------  
export const deleteCategories = async (req, res) => {
  try {
      const category = await categoriesModel.findByPk(req.params.id);
      if (category) {
          await category.destroy();
          res.status(200).json({message:'Product deleted'});
      } else {
          res.status(404).json({message: 'Product with the specified ID does not exist'});
      }
  } catch (error) {
      res.status(500).json({message: error.message});
  }
};