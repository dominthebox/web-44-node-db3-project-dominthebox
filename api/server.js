const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
// doesn't look like I'll need to do anything in here, but we'll see
const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;