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
  
  // POST ---------------  
  export const addProduct = async (req, res) => {
    try {
        const product = await ProductsModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/*export const createProduct = async (req, res) => {
    const { product_id, product_name, product_description, product_price, category_id, brand_id, product_stock_units, created_at } = req.body;
    try {
    const newProduct = await ProductsModel.create({
      product_id,
      product_name,
      product_description,
      product_price,
      category_id,
      brand_id,
      product_stock_units,
      created_at
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
};*/


  
// PUT/PATH ---------------  
export const updateProduct = async (req, res) => {
  try {
      const product = await ProductsModel.findByPk(req.params.id);
      if (product) {
          await product.update(req.body);
          res.status(200).json(product);
      } else {
          res.status(404).send('Product with the specified ID does not exist');
      }
  } catch (error) {
      res.status(500).send(error.message);
  }
};
/*export const updateProduct = async (req, res) => {
const { product_id, product_name, product_description, product_price, category_id, brand_id, product_stock_units, created_at } = req.body;
  
  try {
    // Utiliza el modelo ProductsModel para actualizar el producto en la base de datos
    const [updatedRowsCount, updatedProducts] = await ProductsModel.update(
      {
        product_id,
        product_name,
        product_description,
        product_price,
        category_id,
        brand_id,
        product_stock_units,
        created_at
      },
      {
        where: {
          product_id: req.params.id // Encuentra el producto por su ID
        },
        returning: true // Para obtener el producto actualizado
      }
    );

    // Si no se encontró ningún producto para actualizar, devuelve un error 404
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    // Devuelve el producto actualizado como respuesta
    res.json(updatedProducts[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
};*/


// Función para eliminar un producto ---------------  
export const deleteProduct = async (req, res) => {
  try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
          await product.destroy();
          res.status(200).send('Product deleted');
      } else {
          res.status(404).send('Product with the specified ID does not exist');
      }
  } catch (error) {
      res.status(500).send(error.message);
  }
};

/*export const deleteProduct = async (req, res) => {
  try {
    const deletedRowCount = await ProductsModel.destroy({
      where: {
        product_id: req.params.id // Encuentra el producto por su ID
      }
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.json({ message: `Producto eliminado exitosamente con ID: ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
};
*/
