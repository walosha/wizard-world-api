<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="250" alt="Nest Logo" /></a>
</p>

# World Wizard API

## Tools Used

- NestJS
- Prisma
- MongoDB
- Swagger

## Features

- **Wizards**: CRUD operations for wizards, including creation, retrieval, updating, and deletion. Enables search by first name, last name, or both. Pagination supported.
- **Elixirs**: CRUD implementation with search functionality based on difficulty and name.
- **Spells**: CRUD implementation with search functionality based on name. Option to assign spells to wizards, visible in wizard details.
- **Swagger Documentation**: Endpoints are documented using Swagger.
- **Repository with README**: Codebase is hosted on a repository with a comprehensive README.md file detailing how to run the app.

## Getting Started

### Using Docker Container:

1. Install Docker and Docker Compose.
2. Clone or download the repository.
3. Run `cp .env.sample .env`.
4. Enter the environment variables.
5. Run `docker-compose up --build`.
6. Visit [http://localhost:3000/api#](http://localhost:3000/api#) to access the Swagger documentation.

### Without Using Docker:

1. Clone or download the repository.
2. Run `cp .env.sample .env`.
3. Enter the environment variables.
4. Add a value to the `DATABASE_URL` (MongoDB).
5. Run `npm run dev` to start the NestJS app and generate Prisma.
