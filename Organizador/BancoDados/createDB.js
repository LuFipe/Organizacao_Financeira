const bancos = require('../db')
const tabelas = require('../tabelas')

module.exports.criarRenda = async (year, month, day)=>{
	try{
		const sinc = await bancos.operacoes.sync()
		console.log(sinc)

		const inserir = tabelas.rendas.create(
			{
				ano: year,
				mes: month,
				dia: day
			}
		)
	} catch(error){
		console.log("\n\nErro: "+error)
	}
}