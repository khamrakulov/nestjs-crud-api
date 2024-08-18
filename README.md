# NestJS CRUD API

This repository provides a simple example of a CRUD API built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete functionalities.
- **TypeScript**: Strongly-typed code with TypeScript.
- **Database Integration**: Demonstrates integration with a database (e.g., PostgreSQL, MongoDB).
- **REST API**: Provides a RESTful API interface.
- **Validation**: Input validation using class-validator.
- **Exception Handling**: Centralized exception handling.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js >= 14.x
- npm (Node Package Manager) or Yarn
- A database server (e.g., PostgreSQL, MongoDB)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khamrakulov/nestjs-crud-api.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd nestjs-crud-api
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the root directory and set up your database and other environment variables:

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=your_user
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=your_database
   ```

5. **Run Migrations**

   If your project uses TypeORM, you may need to run database migrations:

   ```bash
   npm run migration:run
   # or
   yarn migration:run
   ```

6. **Start the Application**

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## API Documentation

API documentation is available at [http://localhost:3000/api](http://localhost:3000/api) using Swagger. This is auto-generated and provides detailed information about the available endpoints.

## Usage

### Endpoints

- **GET /items**: Retrieve a list of items.
- **GET /items/:id**: Retrieve a single item by ID.
- **POST /items**: Create a new item.
- **PUT /items/:id**: Update an existing item.
- **DELETE /items/:id**: Delete an item by ID.

### Example Requests

- **Create Item**

  ```bash
  curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Sample Item", "description": "This is a sample item."}'
  ```

- **Get Items**

  ```bash
  curl http://localhost:3000/items
  ```

- **Update Item**

  ```bash
  curl -X PUT http://localhost:3000/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Item", "description": "This item has been updated."}'
  ```

- **Delete Item**

  ```bash
  curl -X DELETE http://localhost:3000/items/1
  ```

## Contributing

Contributions are welcome! Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## Acknowledgements

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [class-validator](https://github.com/typestack/class-validator)

---

For more details, refer to the [NestJS documentation](https://docs.nestjs.com/).

```

Feel free to customize it according to your project specifics!