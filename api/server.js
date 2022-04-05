// Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Server Instance
const server = express();

// Library Middleware
// server.use(cors({
//     origin: '*'
//   }), helmet(), express.json());

// Routers
// const authRouter = require("../routers/auth");
// const usersRouter = require("../routers/users-router");
// const testRouter = require("../routers/token-tester")

// API Endpoints
// server.use("/api/auth", authRouter);
// server.use("/api/users", usersRouter);
// server.use("/api/test", testRouter);

server.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = server;