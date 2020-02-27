const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());



server.get('/', (req, res) => {
    res.status(200).json({start:"server start"})
})

module.exports = server;