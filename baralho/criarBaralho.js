const { baralhos } = require('../data');

function criarBaralho(req, res) {
    console.log(req.body);
    const novoBaralho = {
        id: baralhos.length + 1,
        titulo: req.body.titulo
    };
    baralhos.push(novoBaralho)
    res
    .status(201)
    .send({message: 'Baralho criado com sucesso!', baralho: novoBaralho});
}

module.exports = criarBaralho