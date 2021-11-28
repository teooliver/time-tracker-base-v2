# Time Tracker Base (v2)

A fullstack toggl/clockify like clone app.

> The previous version of this app used Express/Mongoose (Typescript) in the backend. You can check it here:
> https://github.com/teooliver/time-tracker-base

## The Stack

### Backend

- Rust
- Warp
- Mongodb

### FrontEnd

- Typescript
- React

This project uses MongoDB and provides a simple docker-compose.yml file to set it up in your system.

## To use this project follow the steps:

- Install docker on your machine
- Create a .env file and provide a MONGO_CONNECTION_URL connection string in the format:
  > `mongodb://<your-ip-address>:27017/?readPreference=primary&authSource=admin&appname=MongoDB%20Compass&ssl=false`
- Run `docker compose --profile backend --profile frontend up` in the root folder. (This will start the database, backend and frontend)

- Frontend => http://localhost:3000/
- Backend => http://localhost:5000/

## Docker Profiles

If you want to start only the frontend run `docker-compose --profile frontend up`.
If you want to start only the backend run `docker-compose --profile frontend up`.
