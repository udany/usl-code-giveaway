import express from 'express';
import CodeController from '../controllers/CodeController';
import {ErrorReply, SuccessReply} from '../base/Reply';
import AccessKeyController from '../controllers/AccessKeyController';

CodeController.start();

let router = express.Router({});

router.get('/getCode/:id', async function (req, res, next) {
	let user = CodeController.getUser(req.params.id);
	if (user) {
		res.send(new SuccessReply(user));
	} else {
		res.send(new ErrorReply());
	}
});

router.get('/requestCode/:key/:id', async function (req, res, next) {
	let currentKey = AccessKeyController.getCurrentHash(Date.now());

	if (currentKey === req.params.key.toLowerCase()){
		let user = CodeController.assignCodeToUser(req.params.id);

		res.send(new SuccessReply(user));
	} else {
		res.send(new ErrorReply());
	}
});

module.exports.path = '/user';
module.exports.router = router;
