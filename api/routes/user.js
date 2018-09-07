import express from 'express';
import UserModel from "../models/UserModel";

import db from '../Database';
import {Reply} from "../base/Reply";
import User from '../../shared/entities/User';
import UserController from '../controllers/UserController';

let router = express.Router({});

router.get('/', async function (req, res, next) {
    let data = await UserModel.select(db);

    res.send(data);
});

router.get('/:id', async function (req, res, next) {
	/** @var {User} **/
    let data = await UserModel.getById(db, req.params.id);

    res.send(data);
});

// Save
router.post('/register', async function (req, res, next) {
    const obj = new User(req.body);

    await UserController.register(obj);

    res.send(obj);
});

router.put('/:id/inactivate', async function (req, res, next) {
    // deactivate user
});

router.delete('/:id', async function (req, res, next) {
    let data = await UserModel.deleteById(db, req.params.id);

    res.send(new Reply(data));
});

module.exports.path = '/user';
module.exports.router = router;
