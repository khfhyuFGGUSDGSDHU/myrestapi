//dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongodb:
//mongoose.connect('mongodb://localhost:27017/Xdb');
//mongoose.connect('mongodb://fddfg:gbfdfsdvfhdfvg@ds233500.mlab.com:33500/sds');
//mongodb://dsfjhhsbf:JYGUGHhjbhe3@ds241570.mlab.com:41570/mt_stordb
//mongoose.connect('mongodb://sadsaf324:kj67ty6tgghjjbnjm@cluster0-shard-00-00-tsxbr.mongodb.net:27017,cluster0-shard-00-01-tsxbr.mongodb.net:27017,cluster0-shard-00-02-tsxbr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');

mongoose.connect('mongodb://hgijhbb:jgudtbjhiugyu2626@ds245210.mlab.com:45210/gdf');

//express:
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes:
app.use('/api',require('./routes/api'));

//start service:
app.listen(1000);
console.log('Serveris running on port 1000');
