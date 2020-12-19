const http = require('http');
let path = require('path');
const util = require('util');
const v8 = require('v8');
const camelCase = require('camelcase');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer(function (request, response) {
    response.status = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello there!\n');
});
server.listen(port, hostname, () => {
    util.log(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    util.log(path.join(__dirname, 'uploads', 'images'));
    console.log('Server running at http://${hostname}:${port}/');
});
console.log(camelCase('i-wrote-something'));