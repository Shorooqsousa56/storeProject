# MyStore — Full Stack E-Commerce Application

This is a simple e-commerce web application built with Angular for the frontend and Node.js/Express + SQL database for the backend + Docker for database containerization.

# Project Structure

StoreProject/
│── storeFront/ # Angular frontend
| └── README.md
│── storeBack/ # Node.js + Express backend
│ ├── storefrontProj/
│ └── docker-compose.yml # Database container

# Features

Frontend (Angular)

1-Product listing page

2-Product detail page

3-Add to cart functionality

4-Update cart quantity (+ / –)

5-Remove items from cart

6-checkout form:

Full name

Address

Credit card

7-Confirmation page showing:

User name

Total price

8-Responsive UI + hover image animations + messages

Backend (Node.js / Express)

REST API endpoints for:

1-Fetching all product list

2-Fetching product by id

3-Database layer for products

4-Safe server startup with environment variables

5-Fully Dockerized PostgreSQL database

# Projrect Setup

# 1- Clone the repository

git clone https://github.com/Shorooqsousa56/storeProject.git
cd storeProject

# Backend

# 1- Navigate to the backend folder

cd storeBack
cd storefrontProj

# 2- Install dependencies

npm install

# Dependencies

Dependencies are listed in package.json in storeback folder

# Dev Dependencies

Dev Dependencies are listed in package.json in storeback folder

# 3- Setup environment variables

create .env file

NODE_ENV=dev
POSTGRES_USER=your_db_user
POSTGRES_PASSWORD=your_db_password
POSTGRES_DB=store_front_db
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5433
SALT_ROUNDS=10
PEPPER=f1a3b5c9d8e2f7a1b4c6d8e0f9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9
SECRET_KEY=your_secret_key

# 4- Run PostgreSQL in Docker

docker start storefrontproj-postgres-1

docker exec -it storefrontproj-postgres-1 psql -U your_db_user -d store_front_db

# 5- Run database migrations to create tables and initial data

npm run migrate

# 6- Run the Node.js Backend

npm run build
npm run start

# Frontend

# 1-Navigate to the frontend folder

cd storefront
cd my-store

# 2-Install dependencies

npm install

# Dependencies

Dependencies are listed in package.json in storefront folder

# Dev Dependencies

Dev Dependencies are listed in package.json in storefront folder

# 3-Serve the Angular app

ng serve

# 4- Usage

Open your browser and go to http://localhost:4200/products to see the product list.

Click on a product photo to view details.

Add products to the cart and adjust quantities.

Checkout to see the confirmation page with your name and total price.
