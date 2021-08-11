const http = require('http');
const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
});
