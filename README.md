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

## Whats New

v2.X is built from scratch. Both UI and internal workflow of the application are changed to a better design.

## Features yet to be migrated from v1.X to v2.X

Following features that exist in v1.X

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

**[Docker](https://www.docker.com/)** is now supported and improved.

[How To Set Up Laravel, Nginx, and MySQL With Docker Compose on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-laravel-nginx-and-mysql-with-docker-compose-on-ubuntu-20-04)

With the improved Docker setup, you will get:

- nodejs
- mongodb

### Steps to install:

1. Clone or donwload the repository.
2. Create **purify** folder in `storage/app/` directory.
3. Run `cp .env.sample .env`.
4. Run `docker-compose up -d`.
5. Run `docker exec -it node_db sh`. Inside the shell, run:

6. Finally, exit the container by running `exit` in the container shell.
7. Run `docker exec -it app sh`. Inside the shell, run following commands:

   Then exit from the container.

8. Visit **http://localhost:3000/api#**. Access the swagger documentation:
