//dependencese:
var restful= require('node-restful');
var mongoose=restful.mongoose;

var locationvoteSchema=new mongoose.Schema({
    vote:Boolean,
    Latitude:Number,
    Longitude:Number,
    Time:Number
});

//return models
module.exports=restful.model('tbllocationvote',locationvoteSchema);