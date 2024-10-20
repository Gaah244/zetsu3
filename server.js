const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Dados de desempenho e progresso dos membros (simulados)
let membersPerformance = [
    { name: 'João', performance: 65 },
    { name: 'Maria', performance: 80 },
    { name: 'Carlos', performance: 70 },
];

app.get('/performance', (req, res) => {
    res.json(membersPerformance);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
