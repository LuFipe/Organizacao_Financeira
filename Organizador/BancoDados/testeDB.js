const criar = require('./createDB')
const ler = require('./readDB')

//criar.criarOperacao(2023,02,01,null,'renda','op','',50.3, "outra descricao qlq","nao nulo",null)
async function testar(){
	let obj = await ler.readOperacao();
	console.log("Testando manipulação de data")
	data = obj[0].createdAt.split('-')
	ano = data[0]
	mes = data[1]
	dia = data[2].split('T')[0]
	console.log(dia)
}
console.log("Entrando na Função:")
testar();