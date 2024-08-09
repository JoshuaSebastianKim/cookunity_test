# Cookunity challenge

Cookunity take home challenge. You can check a demo here: http://joshua-sebastian.kim/card-list
Also can check Graphql playgound here http://joshua-sebastian.kim:8080/graphql

## Dependencies

- yarn
- Docker
- docker-compose

## Stack

### Backend

- Nestjs used as the framework
- Postgres with Prisma ORM
- GraphQL with Apollo
- Auth with passport and Google as a provider using JWT

### Frontend

- NextJs used as the framework
- NextAuth to handle sessions
- TailwindCSS for styling
- Framer motion for animations
- GraphQL with Apollo for data fetching

# To Run locally

## Instalation

```
# create .env file and change google api keys to own
cp .env.example .env.local
# run on docker
docker-compose up
# setup db
npx prisma db push
npx prisma db seed
```

## Usage

```
http://localhost:3000
http://localhost:3001/graphql # contains docs for graphql resources
http://localhost:3001/docs # swagger docs
```

## Test

### Run test

```
yarn run test
```
