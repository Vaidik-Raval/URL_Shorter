var express = require('express');
const {handleAna} =require('../contoller/url');
var router = express.Router();


/* GET home page. */
router.post("/", handleAna);

module.exports = router;
