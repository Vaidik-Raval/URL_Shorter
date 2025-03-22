var express = require('express');
const {handleGeneratNSU, handleAna} =require('../contoller/url');
const mongoose =require('mongoose')
var router = express.Router();


/* GET home page. */
router.post("/", handleGeneratNSU);


module.exports = router;
