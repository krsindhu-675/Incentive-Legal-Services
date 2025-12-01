const mongoose=require('mongoose');
module.exports=mongoose.model('LSPProfile',new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},qualification:String,experience:Number,expertise:String,verified:{type:Boolean,default:false}}));
