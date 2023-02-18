<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="250" alt="Nest Logo" /></a>
</p>

<h1>World Wizard API</h1>

## Tools used

- Nestjs
- Prisma
- Mongodb
- Swagger

## Testing

- We want testable softwares. Most parts of the software in the previous version 1.x were covered by test.
- To run Feature and Unit Tests run following commands:

  ```sh
  $ npm run test
  ```

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

### Without Using Docker:

1. Clone or donwload the repository.
2. Run `cp .env.sample .env`.
3. Enter the env variables
4. Add value to the `DATABASE_URL` (Mongodb)
5. Run `npm run dev` to stat nestjs app and run prisma generate

### Using Docker Container:

[there is an issue with prisma running a node docker image associated with some operating systems, click the link to get more insight !!! ](https://github.com/prisma/prisma/issues/7631)

### Steps to install:

1. Clone or donwload the repository.
2. Run `cp .env.sample .env`.
3. Enter the env variables
4. Run `docker-compose up --build`.
5. Run `npm run dev` to stat nestjs app and run prisma generate
6. Visit **http://localhost:3000/api#**. Access the swagger documentation:
