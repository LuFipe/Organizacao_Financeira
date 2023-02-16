const Sequelize = require('sequelize');
const path = require('path');

module.exports.op = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname,'/BancoDados/operacoes.db')
});

module.exports.dem = new Sequelize({
	dialect:"sqlite",
	storage: path.join(__dirname,'BancoDados/demonstrativos.db')
});