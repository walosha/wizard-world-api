<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="250" alt="Nest Logo" /></a>
</p>

<h1>World Wizard API</h1>

## Tools used

- Nestjs
- Prisma
- Mongodb
- Swagger

## Features

- Create the WizardWorldApi specifically the endpoints for Elixirs, Spells and Wizards.
  For Wizards
  create,
  get,
  update,
  delete
  search by either their first or last name or both
  Paginate your data

- Elixirs, CRUD implementation and also ensure the results can be searched based on the difficulty, and name.
- Spells, CRUD implementation and also ensure the results can be searched based on the name
- a feature to make it possible for a Spell to be assigned to a Wizard, which shows up on that Wizard details
- Document the endpoints using swagger.
- your code into a repo with a README.md file stating how to run your app

## How to Start

### Using Docker Container:

### Steps to install:

1. Install docker and docker compose
2. Clone or donwload the repository.
3. Run `cp .env.sample .env`.
4. Enter the env variables
5. Run `docker-compose up --build`.
6. Visit **http://localhost:3000/api#**. Access the swagger documentation:

### Without Using Docker:

1. Clone or donwload the repository.
2. Run `cp .env.sample .env`.
3. Enter the env variables
4. Add value to the `DATABASE_URL` (Mongodb)
5. Run `npm run dev` to stat nestjs app and run prisma generate
