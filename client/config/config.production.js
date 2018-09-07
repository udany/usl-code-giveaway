let gCfg = require('./config.global');

let cfg = JSON.parse(JSON.stringify(gCfg));

cfg.apiUrl = "http://udany.net:8050";

export default cfg;
