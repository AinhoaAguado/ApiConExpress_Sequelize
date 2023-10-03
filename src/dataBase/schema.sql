CREATE DATABASE productos_tienda_local;
USE productos_tienda_local;

CREATE TABLE users (
	user_id  int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	user_name varchar (20) NOT NULL UNIQUE,
	user_email varchar (50) NOT NULL UNIQUE,
	user_password int (20) NOT NULL UNIQUE,
	user_phone int (12) NOT NULL UNIQUE,
	created_at timestamp  NOT NULL 
);

CREATE TABLE products (
  product_id int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
  product_name varchar (20) NOT NULL UNIQUE,
  product_description varchar (50)  NOT NULL,
  product_price int (6) NOT NULL,
  category_id int (20)  NOT NULL,
  brand_id int (20)  NOT NULL,
  product_stock_units int (6) NOT NULL,
  created_at timestamp NOT NULL
);

CREATE TABLE categories (
	category_id int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	category_name varchar (20) NOT NULL UNIQUE
);

CREATE TABLE brands (
	brand_id int (20) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
	brand_name varchar (20) NOT NULL UNIQUE
);

ALTER TABLE products ADD FOREIGN KEY (category_id) REFERENCES categories (category_id);
ALTER TABLE products ADD FOREIGN KEY (brand_id) REFERENCES brands (brand_id);

/*campos que pide sequelize*/
/*createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP*/

/*
 INSERT into books (title, writer, book_description)
    VALUES("100 años de soledad", "Gabriel García Marquez", "El mejor libro"),
    ("la fiesta del Chivo", "Mario Vargas LLosa", "Relato del asesinato de un dictador");
*/

/*
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE) 
  */
  
SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM  categories;
SELECT * FROM  brands;

