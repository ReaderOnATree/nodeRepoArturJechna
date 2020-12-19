const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req, res) {
    getTitiles(res);
}).listen(8000, "127.0.0.1");

function getTitiles(res) {
    fs.readFile('./titles.json', function (err, data) {
        if (err) return hadError(err, res);
        getTemplate(JSON.parse(data.toString()), res);
    });
}

function getTemplate(titiles, res) {
    fs.readFile('./template.html', function (err, data) {
        if (err) return hadError(err, res);
        formatHtml(titles, data.toString(), res);
    });
}

function formatHtml(titlles, tmpl, res) {
    let html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

function hadError(err, res) {
    console.log(err);
    res.end('Error');
}
