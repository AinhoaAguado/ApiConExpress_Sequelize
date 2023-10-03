CREATE DATABASE productos_tienda_local;
USE productos_tienda_local;

/*CREATE TABLE users (
	user_id  int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	user_name varchar (20) NOT NULL UNIQUE,
	user_email varchar (50) NOT NULL UNIQUE,
	user_password int (20) NOT NULL UNIQUE,
	user_phone int (12) NOT NULL UNIQUE,
	created_at timestamp  NOT NULL 
);*/

CREATE TABLE products (
  product_id int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
  product_name varchar (20) NOT NULL UNIQUE,
  product_description varchar (50)  NOT NULL,
  product_price int (6) NOT NULL,
  category_id int (20)  NOT NULL,
  brand_id int (20)  NOT NULL,
  product_stock_units int NOT NULL,
  created_at timestamp
);

CREATE TABLE categories (
	category_id int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	category_name varchar (20) NOT NULL UNIQUE,
    subCategory_name varchar (20) NOT NULL UNIQUE
);

/*CREATE TABLE brands (
	brand_id int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	brand_name varchar (20) NOT NULL UNIQUE
);*/

ALTER TABLE products ADD FOREIGN KEY (category_id) REFERENCES categories (category_id);
ALTER TABLE products ADD FOREIGN KEY (brand_id) REFERENCES brands (brand_id);


INSERT INTO products (product_name, product_description, product_price, category_id, brand_id, product_stock_units)
VALUES ('Deportivas', 'Zapatillas para correr y hacer ejercicio', 89.99, 2, 1, 100);

INSERT INTO products (product_name, product_description, product_price, category_id, brand_id, product_stock_units)
VALUES ('Sandalias', 'Zapatillas para vestir', 24.99, 3, 4, 80);

INSERT INTO categories (category_name, subCategory_name)
VALUES ('adidas', 'subcategory');


SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM  categories;
SELECT * FROM  brands;
