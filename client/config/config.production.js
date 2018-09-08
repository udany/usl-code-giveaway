let gCfg = require('./config.global');

let cfg = JSON.parse(JSON.stringify(gCfg));

cfg.apiUrl = "http://api.cblol.udany.net/";

export default cfg;
