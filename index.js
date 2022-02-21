const express = require('express');
const server = express();

server.get('/', (req,res) => {
    return res.json({usuario: 'Inocêncio'})
});

server.listen(3000, () => {
 console.log('Servidor está funcionando...')
});