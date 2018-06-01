//dependenceies:
var express=require('express');
var router=express.Router();

//get methods:
var Status = require('../models/status');
var LocationVote = require('../models/locationvote');


//routes:
Status.methods(['get','post','put','delete']);
LocationVote.methods(['get','post','put','delete']);

Status.register(router,'/status');
LocationVote.register(router,'/locationvote');

//return routes:
module.exports=router;