# Node.js Project Readme

## Project Description
This is a Node.js project utilizing Prisma ORM for database management, CORS for cross-origin resource sharing, Body-parser for parsing incoming request bodies, and Express.js for building the server. The project allows users to perform CRUD operations on League of Legends champions.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### Development Mode
To run the project in development mode with nodemon for automatic server restarts on file changes, use:
```bash
npm run dev
```

### Production Mode
To start the project in production mode, use:
```bash
npm run start
```

### Seed Data
To seed the database with initial data, use:
```bash
npm run seed
```

## Endpoints
- `GET /champions`: Retrieve all champions.
- `GET /champions/:id`: Retrieve champion by ID.
- `POST /champions`: Create a new champion.
- `PUT /champions/:id`: Update a champion by ID.
- `DELETE /champions/:id`: Delete a champion by ID.

## Technologies Used
- Node.js
- Prisma
- CORS
- Body-parser
- Express.js

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## License
This project is licensed under the [MIT License](LICENSE).
