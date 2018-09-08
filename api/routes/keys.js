import express from 'express';
import md5 from 'md5';
import AccessKeyController from '../controllers/AccessKeyController';
import {ErrorReply, SuccessReply} from '../base/Reply';

let router = express.Router({});

router.get('/current', async function (req, res, next) {
	let time = Date.now();

	if (req.query.pass === "SupFullAp") {
		res.send(new SuccessReply({
			key: AccessKeyController.getCurrentHash(time),
			elapsed: time - AccessKeyController.getCurrentStartTime(time),
			expiry: AccessKeyController.getExpiryTime()
		}));
	} else {
		res.send(new ErrorReply("wrong pass"));
	}
});

module.exports.path = '/keys';
module.exports.router = router;
