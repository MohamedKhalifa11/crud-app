# Getting Started with CRUD App

This project is a simple CRUD (Create, Read, Update, Delete) application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Using JSON Server

This project uses [JSON Server](https://github.com/typicode/json-server) as a mock API. To set it up:

1. Install JSON Server globally:
   ```bash
   npm install -g json-server

2. Run the JSON Server in the project path at port 9000:
   ```bash
   json-server --watch db.json --port 9000
