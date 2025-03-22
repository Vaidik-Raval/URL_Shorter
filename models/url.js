
const mongoose =require("mongoose")

const urlSchema=new mongoose.Schema(
    {
    shortId: {
        type:String,
        require:true,
        unique:true,
    },
    ogUrl: {
        type:String,
        require:true,
    },
    visited:[{
        visitTimestamp:{type:Date,default:Date.now(),},
        
    }],

},{timestamps:true})

const URL =mongoose.model('url',urlSchema);
module.exports=URL;