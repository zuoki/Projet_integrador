const http = require("http");
const character = require("./data.js");

const server = http.createServer((req, res) => {
  if (req.url === "/4") {
    let id = req.url.split("/")[2];
    let personaje = character.find((character) => character.id == id);
    console.log(personaje)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(personaje));
  }

  if (req.url.includes("/character")) {
    let id = req.url.split("/")[2];
    let personaje = character.find((character) => character.id == id);
console.log(personaje)
    if (personaje) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(personaje));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Personaje no encontrado');
    }
  }
}).listen(3001, localHost);
