let gCfg = require('./config.global');

let cfg = JSON.parse(JSON.stringify(gCfg));

cfg.mysql = {
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'hackatinder'
};

// Changes go here

export default cfg;