const express = require('express');
const create_account = require('../Components/account/create_account');
const profile_update = require('../Components/profile/profile_update');
const createDisease = require('../Components/disease/createDisease');
const updateDisease = require('../Components/disease/updateDisease');
const profile_fetch = require('../Components/profile/profile_fetch');
const router = express.Router();

router.post('/profile_fetch', profile_fetch);//createAccount route will create/enter account details

router.post('/profile_update', profile_update);//loginAccount route will login account details

router.post('/disease_create', createDisease);

router.post('/disease_update', updateDisease);

module.exports = router;