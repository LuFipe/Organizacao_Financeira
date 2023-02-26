const bancos = require("../db")
const tabelas = require("../tabelas")

module.exports.atualizarOp = async (primary, year, month, day, nat, tp, stp, vl, desc, sit, est)=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const operacao = await tabelas.operacoes.findByPk(primary);
		operacao.ano = year;
		operacao.mes = month;
		operacao.dia = day;
		operacao.natureza = nat;
		operacao.tipo = tp;
		operacao.subtipo = stp;
		operacao.valor = vl;
		operacao.descricao = desc;
		operacao.situacao = sit;
		operacao.estado = est;

		const salvar = await operacao.save();
	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.atualizarOpInv = async(primary, year, month, day, vl0, vlI, vari, d_r)=>{
	try{
		const sinc = await bancos.op.sync();
		console.log(sinc)

		const opInv = await tabelas.opInvest.findByPk(primary)
		opInv.ano=year;
		opInv.mes=month;
		opInv.dia=day;
		opInv.val0=vl0;
		opInv.valI=vlI;
		opInv.variacao=vari;
		opInv.depos_retirado=d_r;
	} catch(error){
		console.log("Deu erro: "+error)
	}
}

module.exports.atualizarRenda = async(primary, year, month, iP, iO, iT, eP, eO, eT, rdM)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const renda = await tabelas.demRenda.findByPk(primary);
		renda.ano = year;
		renda.mes = month;
		renda.incomePessoal = iP;
		renda.incomeOperacional = iO;
		renda.incomeTotal = iT;
		renda.expensePessoal = eP;
		renda.expenseOperacional = eO;
		renda.expenseTotal = eT;
		renda.rendaMensal = rdM;

		const salvar = await renda.save();
	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.atualizarBalPat = async(primary, year, month, cs, receb, invest,pag)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let ast = cs + receb + invest;
		let liab = pag;
		let pat = ast - liab;

		const balPat = await tabelas.demBalPat.findByPk(primary);
		balPat.ano = year;
		balPat.mes = month;
		balPat.cash = cs;
		balPat.recebiveis = receb;
		balPat.investido = invest;
		balPat.asset = ast;
		balPat.pagaveis = pag;
		balPat.liability = liab;
		balPat.patrimonio = pat;

		const salvar = await balPat.save();
	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}

module.exports.atualizarCashFlow = async(primary, year, month, rdM, divC, emp, pEmp, cInv, vInv, dInv)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const cashFlow = await tabelas.demCashFlow.findByPk(primary);
		cashFlow.ano = year;
		cashFlow.mes = month;
		cashFlow.rendaMensal = rdM;
		cashFlow.divContraida = divC;
		cashFlow.emprestado = emp;
		cashFlow.parcelEmprest = pEmp;
		cashFlow.compInvestimento = cInv;
		cashFlow.vendInvestimento = vInv;
		cashFlow.desval_Investimento = dInv;

		const salvar = await cashFlow.save();
	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}