CREATE DATABASE bean_haven;

USE bean_haven;

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) UNIQUE,

    password VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO users (username, password)
VALUES (
'@mayuresh',
'$2b$10$7QJrjYb9x1Z0JQ9VZy6j6u4sP5vGQ8o4z9F3g8m3q0zYz7Yp1k9uK'
);

UPDATE users
SET password = '$2b$10$pv8ptDr9j9CFp.9.mOLw2uOK6tYq2dBRNd0sGspxouC6OvmCRpCPy'
WHERE username = '@mayuresh';


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

INSERT INTO test_connection (message)
VALUES ("MySQL Connected Successfully");

SELECT * FROM test_connection;
