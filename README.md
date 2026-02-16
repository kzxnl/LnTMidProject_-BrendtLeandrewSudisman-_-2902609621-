# LnT Mid Project - Backend CMS

This is a RESTful API for an E-commerce Content Management System (CMS) built with Node.js and Sequelize.

## Requirements
- Node.js
- MySQL/PostgreSQL

## Installation
1. Clone the repository.
2. Run `npm install`.
3. Create a database named `cms_db` in your SQL tool.
4. Update database credentials in `models.js`.
5. Start the server with `npm run dev`.

## ERD & Tables
- **Users**: Manages admin/staff accounts.
- **Categories**: Product groupings (e.g., Electronics, Fashion).
- **Products**: Individual items linked to a Category (One-to-Many).

## Endpoints
- `GET /products`: List all products.
- `POST /products`: Create a product (include `CategoryId`).
- `GET /categories`: List categories and their associated products.
