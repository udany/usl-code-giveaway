import express from 'express';
import md5 from 'md5';
import AccessKeyController from '../controllers/AccessKeyController';

let router = express.Router({});

router.get('/current', async function (req, res, next) {
	let time = Date.now();

	res.send({
		key: AccessKeyController.getCurrentHash(time),
		elapsed: time - AccessKeyController.getCurrentStartTime(time),
		expiry: AccessKeyController.getExpiryTime()
	});
});

module.exports.path = '/keys';
module.exports.router = router;
