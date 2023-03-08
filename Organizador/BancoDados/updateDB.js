const bancos = require("../db")
const tabelas = require("../tabelas")

module.exports.atualizarOp = async (primary, nat, tp, stp, vl, desc, sit, est)=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const operacao = await tabelas.operacoes.findByPk(primary);
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

module.exports.atualizarOpInv = async(primary, vl0, vlI, d_r, desc)=>{
	try{
		const sinc = await bancos.op.sync();
		console.log(sinc)

		const opInv = await tabelas.opInvest.findByPk(primary)
		opInv.val0=vl0;
		opInv.valI=vlI;
		opInv.variacao=vlI-vl0;
		opInv.depos_retirado=d_r;
		opInv.descricao=desc;
	} catch(error){
		console.log("Deu erro: "+error)
	}
}

module.exports.atualizarRenda = async(primary, iP, iO, iT, eP, eO, eT, rdM)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const renda = await tabelas.demRenda.findByPk(primary);
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

module.exports.atualizarBalPat = async(primary, cs, receb, invest,pag)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let ast = cs + receb + invest;
		let liab = pag;
		let pat = ast - liab;

		const balPat = await tabelas.demBalPat.findByPk(primary);
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

module.exports.atualizarCashFlow = async(primary, rdM, divC, divP, emp, rcb, cInv, vInv, dInv)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		nt_cs = rdM+divC+emp+pEmp+cInv+vInv+dInv;
		const cashFlow = await tabelas.demCashFlow.findByPk(primary);
		cashFlow.rendaMensal = rdM;
		cashFlow.divContraida = divC;
		cashFlow.divPagamento = divP;
		cashFlow.emprestado = emp;
		cashFlow.recebido = rcb;
		cashFlow.compInvestimento = cInv;
		cashFlow.vendInvestimento = vInv;
		cashFlow.desval_Investimento = dInv;
		cashFlow.net_cash = nt_cs;

		const salvar = await cashFlow.save();
	} catch(error){
		console.log("Deu erro do tipo: "+error)
	}
}