const express = require('express');
const create_account = require('../Components/account/create_account');
const login_account = require('../Components/account/login_account');
const router = express.Router();

router.post('/signup', create_account);//createAccount route will create/enter account details

router.post('/login', login_account);//loginAccount route will login account details

module.exports = router;