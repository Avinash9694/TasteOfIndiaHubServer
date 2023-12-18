# Taste of India Hub Server

This repository contains the server-side code for Taste of India Hub, a recipe hub application. It uses Express.js to handle HTTP requests, retrieve chef data, and serve as the backend for the application.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Avinash9694/TasteOfIndiaHubServer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TasteOfIndiaHubServer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the server:

   ```bash
   npm start
   ```

   This will start the server using [nodemon](https://nodemon.io/), which automatically restarts the server when changes are detected.

2. Access the server at [http://localhost:5000](http://localhost:5000) in your browser or through API requests.

## Endpoints

- **GET /:** Welcome message.
- **GET /chef:** Get all chef data.
- **GET /chef/:id:** Get chef data by ID.

## Configuration

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=5000
```

Adjust the `PORT` variable as needed.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS (Cross-Origin Resource Sharing).
- [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [Nodemon](https://nodemon.io/): Monitor for any changes in your source and automatically restart your server.
