const express = require("express");
const router = express.Router();
const EmailTest = require("../Components/EmailTest/EmailTest");
const videos = require("../Components/Recommendations/videos");
const cpd = require("../Components/CPD/cpd");

router.post('/videos',videos);
router.post('/email',EmailTest);
router.post('/cpd',cpd);

module.exports=router