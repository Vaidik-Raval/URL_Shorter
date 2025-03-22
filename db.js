const mongoose =require("mongoose");

async function connMongo(url){
    return mongoose.connect(url);
}
module.exports={
    connMongo,
}