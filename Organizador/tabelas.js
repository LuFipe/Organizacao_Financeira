const Sequelize = require('sequelize');
const bancos = require('./db');

module.exports.operacoes = bancos.op.define('Operacoes',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	ref:{
		type: Sequelize.INTEGER,
		allowNull: true
	},
	natureza:{
		type: Sequelize.STRING,
		allowNull:false
	},
	tipo:{
		type: Sequelize.STRING,
		allowNull: false
	},
	subtipo:{
		type: Sequelize.STRING,
		allowNull:true
	},
	valor:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	descricao:{
		type: Sequelize.TEXT,
		allowNull: false
	},
	situacao:{
		type: Sequelize.BOOLEAN,
		allowNull:true
	},
	estado:{
		type: Sequelize.BOOLEAN,
		allowNull: false
	}
},{freezeTableName:true});

module.exports.opInvest = bancos.op.define('Investidos',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	ticker:{
		type: Sequelize.STRING,
		allowNull: false
	},
	val0:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	valI:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	variacao:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	depos_retirado:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	descricao:{
		type: Sequelize.TEXT,
		allowNull:false
	}
},{freezeTableName:true});

module.exports.demRenda = bancos.dem.define('Demonstrativo_Renda',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	incomePessoal:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	incomeOperacional:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	incomeTotal:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	expensePessoal:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	expenseOperacional:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	expenseTotal:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	rendaMensal:{
		type: Sequelize.FLOAT,
		allowNull:false
	}
},{freezeTableName:true});

module.exports.demBalPat = bancos.dem.define('Demonstrativo_Balanco_Patrimonial',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	cash:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	recebiveis:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	investido:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	asset:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	pagaveis:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	liability:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	patrimonio:{
		type: Sequelize.FLOAT,
		allowNull:false
	}
},{freezeTableName:true})

module.exports.demCashFlow = bancos.dem.define('Demonstrativo_Cash_Flow',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	rendaMensal:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	divContraida:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	divPagamento:{
		type: Sequelize.FLOAT,
		allowNull: false
	},
	emprestado:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	recebido:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	compInvestimento:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	vendInvestimento:{
		type: Sequelize.FLOAT,
		allowNull:false
	},
	desval_Investimento:{
		type:Sequelize.FLOAT,
		allowNull:false
	},
	net_cash:{
		type:Sequelize.FLOAT,
		allowNull:false
	}

},{freezeTableName:true})