## Description

Nest-Mongoose scalable backend for a task manager.

## Before clone

1. If you don't have nest CLI installed globally, execute:

```bash
$ npm install -g @nestjs/cli
```

2. Install [Docker](https://docs.docker.com/compose/install/).

## Clone and run

1. Clone the repository.

2. Execute:

```bash
$ npm install
```

3. Fill ```.env.template``` file and rename it to ```.env```. Ask the developer for the necessary information.

4. Build database:

```bash
$ docker-compose up -d
```

5. Run app:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

6. Seed URL: ```localhost:<port>/api/seed```. Uses the port where the application is running (see .env), default is 3000.

- POST request to run seed.
- DELETE request to restart seed.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Credits
Agustin Bertello

Fullstack developer.
- My [Linkedin](https://linkedin.com/in/agustín-bertello-b8b967150).
