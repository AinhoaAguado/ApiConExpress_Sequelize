/*const User = require('../models/usersModel.js'); // Importa el modelo User

// Ejemplo de cómo crear un nuevo usuario en la base de datos
User.create({ user_name: 'Ainhoa Aguado', user_email: 'ainhoa@example.com', user_password: 'help', user_phone:  '666666666'})
  .then(user => {
    console.log('Usuario creado:', user.toJSON());
  })
  .catch(error => {
    console.error('Error al crear usuario:', error);
  });*/


/*
  ***********************-******************************
  import ProductsModel from "../models/productsModel.js";

// GET - Obtener todos los productos
export const getAllProducts = async (_req, res) => {
  try {
    const products = await ProductsModel.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos.' });
  }
};

  // GET by ID - Obtener un producto por ID
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
  
  // POST - Crear producto
export const createProduct = async (req, res) => {
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
};

// PUT/PATH Actualizar un producto

export const updateProduct = async (req, res) => {
  // Extrae los datos del cuerpo de la solicitud (request body)
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
    // Si ocurre un error, devuelve un error 500
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
};

// Función para eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    // Utiliza el modelo ProductsModel para eliminar el producto de la base de datos
    const deletedRowCount = await ProductsModel.destroy({
      where: {
        product_id: req.params.id // Encuentra el producto por su ID
      }
    });

    // Si no se encontró ningún producto para eliminar, devuelve un error 404
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    // Devuelve un mensaje indicando que el producto fue eliminado exitosamente
    res.json({ message: `Producto eliminado exitosamente con ID: ${req.params.id}` });
    
  } catch (error) {
    // Si ocurre un error, devuelve un error 500
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
};


// DELETE - Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const deletedRowCount = await ProductsModel.destroy({
      where: {
        product_id: req.params.id
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

/*
export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};*/
