const express = require('express');
const app = express();
require('dotenv').config()

const rotas = require('./model/alunoModel');
app.use(express.json());

app.post('/login', rotas.login)
app.get('/alunos', rotas.getAlunos)
app.get('/alunos/:id', rotas.getAlunoById)
app.post('/alunos', rotas.verifyJWT, rotas.createAluno)
app.put('/alunos/:id', rotas.verifyJWT, rotas.updateAluno)
app.delete('/alunos/:id', rotas.verifyJWT, rotas.deleteAluno)

app.listen(process.env.PORT);