const bancos = require("../db")
const tabelas = require("../tabelas")

module.exports.deleteOp = async (primary)=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const operacao = await tabelas.operacoes.findByPk(primary);
		operacao.destroy();

	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.deleteOpInv = async (primary)=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const opInvest = await tabelas.opInvest.findByPk(primary);
		opInvest.destroy();

	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.deleteRenda = async (primary)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const renda = await tabelas.demRenda.findByPk(primary);
		renda.destroy();

	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.deleteBalPat = async (primary)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const balPat = await tabelas.demBalPat.findByPk(primary);
		balPat.destroy();

	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.deleteBalPat = async (primary)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const cashFlow = await tabelas.demCashFlow.findByPk(primary);
		cashFlow.destroy();

	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}