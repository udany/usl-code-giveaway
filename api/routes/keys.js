import express from 'express';

let router = express.Router({});

router.get('/', async function (req, res, next) {
    res.send([45]);
});

module.exports.path = '/user';
module.exports.router = router;
