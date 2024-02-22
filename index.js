const express = require('express');
const app = express();
const porta = 443;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/pagina.html');
});

app.get('/minhascotas', (req, res) => {
  res.sendFile(__dirname + '/public/html/minhascotas.html');
});

app.get('/compra', (req, res) => {
  res.sendFile(__dirname + '/public/html/compra.html');
});

app.post('/contato', (req, res) => {
  res.sendFile(__dirname + '/public/html/contato.html');
});

app.get('/transacoes', (req, res) => {
  res.sendFile(__dirname + '/public/html/transacoes.html');
});

app.listen(porta, () => {
  console.log("Servidor rodando.");
});