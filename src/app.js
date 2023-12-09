const express = require('express');
const app = express();
const puerto = 80;
const MenusController = require('./controllers/MenusController');

app.use(express.json());
app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola Mundo');
});

app.get('/problemas', MenusController.indexGet);
app.get('/problemas/:id([0-9]+)', MenusController.itemGet);
app.post('/problemas', MenusController.indexPost);
app.put('/problemas/:id([0-9]+)', MenusController.itemPut);
app.patch('/problemas/:id([0-9]+)', MenusController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});