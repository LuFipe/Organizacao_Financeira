const express = require('express')
const cookieParse = require('cookie-parser');
const path = require('path')
const rota = require('./ROTAS/rotas')


let app = express();

//SETTANDO A VIEW ENGINE
//1- SETTANDO A PASTA EM QUE SE ENCONTRA
//2- SETANDO A VIEW PER SE
app.set('views',path.join(__dirname,'PUG'));
app.set('view engine', 'pug');

//POPULANDO O req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//USANDO A PASTA COM OS ELEMENTOS ESTÁTICOS
app.use(express.static(path.join(__dirname,'FRONT')));

//ROTAS
app.use('/',rota);

//CRIAÇÃO DO SERVIDOR
let server = app.listen(3000,()=>{
	console.log("Escutando na porta 3000")
})

//DEU RUIM
app.use((err, req, res, next)=>{
	console.error(err.stack);
	res.status(500).send('Não foi possivel enviar a página, problema 500');
});