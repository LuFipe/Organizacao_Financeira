const express = require('express')
const path = require('path')
const createDB = require('../BancoDados/createDB')
const readDB = require('../BancoDados/readDB')
const updateDB = require('../BancoDados/updateDB')
const deleteDB = require('../BancoDados/deleteDB')

let rota = express.Router();

rota.get('/',async(req,res,next)=>{
	let operacoes = await readDB.readOperacao();
	operacoes = JSON.stringify(operacoes);
	operacoes = JSON.parse(operacoes);
	console.log(operacoes)
	res.render('home',{'OPERACAO':operacoes})
})

rota.get('/criarOp',(req,res,next)=>{
	let operacoes = readDB.readOperacao();
	res.render('createOp',{'OPERACOES':operacoes})
})

rota.post('/criarOp',(req,res,next)=>{
	let ref =req.body.ref_ID;
	let nat =req.body.nat_NAME;
	let tipo=req.body.tipo_NAME;
	let stip=req.body.stipo_NAME;
	let val =req.body.valor_NAME;
	let desc=req.body.desc_NAME;
	let sit =false;
	
	if((nat == "debto")){
		createDB.criarOperacao(ref,nat,tipo,stip,val,desc,false,sit)
	}else{
		createDB.criarOperacao(ref,nat,tipo,stip,val,desc,false,null)
	}

	res.render('home')
})

rota.get('/criarBalPat',async(req,res,next)=>{
	let balPat = await readDB.readBalPat()
	balPat = JSON.stringify(balPat)
	balPat = JSON.parse(balPat)

	let tabela = false;
		if(balPat.length > 0){
			tabela = true;
		}

	console.log(balPat.length)
	res.render('createBalPat',{'PATRIMONIO':balPat,'TABELA':tabela})
})

rota.post('/criarBalPat',async(req,res,next)=>{
	let cash=req.body.cash_NOME;
	let rec =req.body.recebivel_NOME;
	let pag =req.body.pagavel_NOME;
	let inv =req.body.investido_NOME;
	
	createDB.criarBalPat(cash,rec,pag,inv);

	let balPat = await readDB.readBalPat()
	balPat = JSON.stringify(balPat)
	balPat = JSON.parse(balPat)

	res.render('createBalPat',{'PATRIMONIO':balPat})
})

rota.get('/lerDemRenda',()=>{
	
})
module.exports = rota;