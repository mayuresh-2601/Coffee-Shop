CREATE DATABASE bean_haven;

USE bean_haven;

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) UNIQUE,

    password VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



CREATE TABLE products (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    price DECIMAL(10,2),

    category VARCHAR(50),

    image VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE orders (

    id INT AUTO_INCREMENT PRIMARY KEY,

    fullname VARCHAR(100),

    coffee VARCHAR(100),

    quantity INT,

    address TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE contacts (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    email VARCHAR(100),

    phone VARCHAR(15),

    message TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE test_connection (

    id INT AUTO_INCREMENT PRIMARY KEY,

    message VARCHAR(100)

);      

