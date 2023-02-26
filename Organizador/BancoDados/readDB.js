const bancos = require('../db')
const tabelas = require('../tabelas')

module.exports.readOperacao = async()=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		let op = await tabelas.operacoes.findAll()
		op = JSON.stringify(op);
		op = JSON.parse(op)
		console.log(op)
		return op;
	} catch(err){
		console.log("Deu ruim tipo: "+ err)
	}
}

module.exports.readOpInv = async()=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const opInv = await tabelas.opInvest.findAll()
		opInv = JSON.stringify(opInv);
		opInv = JSON.parse(opInv)
		console.log(opInv)
		return opInv;
	} catch(err){
		console.log("Deu ruim tipo: "+ err)
	}
}

module.exports.readRenda = async()=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let demR = await tabelas.demRenda.findAll()
		demR = JSON.stringify(demR);
		demR = JSON.parse(demR)
		console.log(demR)
		return demR;
	} catch(err){
		console.log("Deu ruim tipo: "+ err)
	}
}

module.exports.readBalPat = async()=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let balPat = await tabelas.demBalPat.findAll()
		balPat = JSON.stringify(balPat);
		balPat = JSON.parse(balPat)
		console.log(balPat)
		return balPat;
	} catch(err){
		console.log("Deu ruim tipo: "+ err)
	}
}

module.exports.readCashFlow = async()=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let cashFlow = await tabelas.demCashFlow.findAll()
		cashFlow = JSON.stringify(cashFlow);
		cashFlow = JSON.parse(cashFlow)
		console.log(cashFlow)
		return cashFlow;
	} catch(err){
		console.log("Deu ruim tipo: "+ err)
	}
}