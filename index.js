const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const criarBaralho = require('./baralho/criarBaralho');
const listarBaralhos = require('./baralho/listarBaralhos');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');

app.post('/baralho', criarBaralho);
app.get('/baralho', listarBaralhos);
app.put('/baralho/:id', atualizarBaralho);
app.delete('/baralho/:id', deletarBaralho);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});