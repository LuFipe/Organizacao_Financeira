const bancos = require('../db')
const tabelas = require('../tabelas')

module.exports.criarOperacao = async (year, month, day, rf, nat, tp, stp, vl, desc, est, sit)=>{
	try{
		const sinc = await bancos.op.sync()
		console.log(sinc)

		const inserir = tabelas.operacoes.create(
			{
				ano: year,
				mes: month,
				dia: day,
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

module.exports.criarOpInv = async (year, month, day, rfID, v0, vI, vari, dr)=>{
	try{
		const sinc = await bancos.op.sync();
		console.log(sinc)

		const inserir = tabelas.opInvest.create(
			{
				ano: year,
				mes: month,
				dia: day,
				refID: rfID,
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

module.exports.criarRenda = async(year, month, incP, incO, expP, expO)=>{
	try{
		const sinc = await bancos.dem.sync();
		console.log(sinc)

		let incT = incP + incO;
		let expT = expP + expO;
		let rdM = incT - expT;
		const inserir = await tabelas.demRenda.create(
			{
				ano: year,
				mes: month,
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

module.exports.criarBalPat = async(year, month, cs, receb, invest, pag)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		let ast = cs + receb + invest;
		let liab = pag;
		let pat = ast - liab;

		const inserir = await tabelas.demBalPat.create(
			{
				ano: year,
				mes: month,
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

module.exports.criarCashFlow = async(year, month, rdM, divC, emp, pEmp, cInv, vInv, dInv)=>{
	try{
		const sinc = await bancos.dem.sync()
		console.log(sinc)

		const inserir = await tabelas.demCashFlow.create(
			{
				ano: year,
				mes: month,
				rendaMensal: rdM,
				divContraida: divC,
				emprestado: emp,
				parcelEmprestado: pEmp,
				compInvestimento: cInv,
				vendInvestimento: vInv,
				desval_Investimento: dInv
			}
		)
	} catch(err){
		console.log("Deu ruim tipo: "+err)
	}
}