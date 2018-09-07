let gCfg = require('./config.global');

let cfg = JSON.parse(JSON.stringify(gCfg));

cfg.port = 8050;
cfg.debug = false;

export default cfg;