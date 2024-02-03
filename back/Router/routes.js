const express = require("express");
const router = express.Router();
const EmailTest = require("../Components/EmailTest/EmailTest");
const videos = require("../Components/Recommendations/videos");
const cpd = require("../Components/CPD/cpd");
const VoiceCall = require("../Components/VoiceCall/VoiceCall");

router.post('/videos',videos);
router.post('/email',EmailTest);
router.post('/cpd',cpd);
router.post('/voice',VoiceCall);

module.exports=router