const bancos = require('../db')
const tabelas = require('../tabelas')

module.exports.criarOperacao = async (rf, nat, tp, stp, vl, desc, est, sit)=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const inserir = tabelas.operacoes.create(
			{
				ref: rf,
				natureza: nat,
				tipo: tp,
				subtipo: stp,
				valor: vl,
				descricao: desc,
				situacao: sit,
				estado: est
			}
		)
	} catch(error){
		console.log("\n\nErro: "+error)
	}
};

module.exports.criarOpInv = async (tk, v0, vI, vari, dr)=>{
	try{
		const sinc = await bancos.op.sync();
		console.log(sinc)

		const inserir = tabelas.opInvest.create(
			{
				ticker: tk,
				val0: v0,
				valI: vI,
				variacao: vari,
				depos_retirado: dr
			}
		)
	} catch(err){
		console.log("Deu ruim: "+ err)
	}
};

module.exports.criarRenda = async(incP, incO, expP, expO)=>{
	try{
		const sinc = await bancos.dem.sync();
		console.log(sinc)

		let incT = incP + incO;
		let expT = expP + expO;
		let rdM = incT - expT;
		const inserir = await tabelas.demRenda.create(
			{
				incomePessoal: incP,
				incomeOperacional: incO,
				incomeTotal: incT,
				expensePessoal: expP,
				expenseOperacional: expO,
				expenseTotal: expT,
				rendaMensal: rdM
			}
		)
	} catch(err){
		console.log("Deu ruim tipo: "+ err)
	}
};

module.exports.criarBalPat = async(cs, receb, invest, pag)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let ast = cs + receb + invest;
		let liab = pag;
		let pat = ast - liab;

		const inserir = await tabelas.demBalPat.create(
			{
				cash: cs,
				recebiveis: receb,
				investido: invest,
				asset: ast,
				pagaveis: pag,
				liability: liab,
				patrimonio: pat
			}
		)
	} catch(error){
		console.log("\n\nErro: "+error)
	}
};

module.exports.criarCashFlow = async(rdM, divC, divP, emp, rcb, cInv, vInv, dInv)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		nt_cs = rdM+divC+emp+pEmp+cInv+vInv+dInv;
		const inserir = await tabelas.demCashFlow.create(
			{
				rendaMensal: rdM,
				divContraida: divC,
				divPagamento: divP,
				emprestado: emp,
				recebido: rcb,
				compInvestimento: cInv,
				vendInvestimento: vInv,
				desval_Investimento: dInv,
				net_cash:nt_cs
			}
		)
	} catch(err){
		console.log("Deu ruim tipo: "+err)
	}
}