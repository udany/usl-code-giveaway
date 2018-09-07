import express from 'express';
import CodeController from '../controllers/CodeController';

let router = express.Router({});

router.get('/', async function (req, res, next) {
	await CodeController.loadCodes();

	res.send(CodeController.allCodes());
});

module.exports.path = '/user';
module.exports.router = router;
