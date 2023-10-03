import ProductsModel from "../models/productsModel.js";

// GET All ---------------  
export const getAllProducts = async (_req, res) => {
  try {
    const products = await ProductsModel.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos.' });
  }
};

  // GET by ID ---------------  
export const getProductById = async (req, res) => {
    try {
      const product = await ProductsModel.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el producto.' });
    }
  };


// GET by CATEGORY ---------------  
export const getProductByCategory = async (req, res) => {
  try {
    const category = await ProductsModel.findAll({
      where: {category_id: req.params.category_id}});
    if (!category) {
      return res.status(404).json({ error: 'Id de categoría no encontrado.' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
};

// GET by NAME PRODUCTS  ---------------  
export const getProductByName = async (req, res) => {
  try {
    const name = await ProductsModel.findAll({
      where: {product_name: req.params.product_name}});
    if (!name) {
      return res.status(404).json({ error: 'Nombre de producto no encontrado.' });
    }
    res.json(name);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
};
  
  // ADD ---------------  
  export const createProduct = async (req, res) => {
    try {
        const product = await ProductsModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
  
// UPDATE  ---------------  
export const updateProduct = async (req, res) => {
  try {
      const product = await ProductsModel.findByPk(req.params.id);
      if (product) {
          await product.update(req.body);
          res.status(200).json(product);
      } else {
          res.status(404).json({messagge: 'Product with the specified ID does not exist'});
      }
  } catch (error) {
      res.status(500).json({messagge: error.message});
  }
};

// DELETE  ---------------  
export const deleteProduct = async (req, res) => {
  try {
      const product = await ProductsModel.findByPk(req.params.id);
      if (product) {
          await product.destroy();
          res.status(200).json('Product deleted');
      } else {
          res.status(404).json('Product with the specified ID does not exist');
      }
  } catch (error) {
      res.status(500).send(error.message);
  }
};