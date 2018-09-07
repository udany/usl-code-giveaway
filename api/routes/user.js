import express from 'express';
import CodeController from '../controllers/CodeController';

CodeController.start();


let router = express.Router({});

router.get('/', async function (req, res, next) {
	res.send(CodeController.allCodes());
});

module.exports.path = '/user';
module.exports.router = router;
