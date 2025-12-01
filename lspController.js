const LSP=require('../models/LSPProfile');
exports.createProfile=async(req,res)=>{try{const{qualification,experience,expertise}=req.body;const p=await LSP.create({userId:req.user.id,qualification,experience,expertise});res.json({message:'Profile Created',profile:p});}catch(e){res.json({error:e.message});}};
exports.getPending=async(req,res)=>{try{res.json(await LSP.find({verified:false}));}catch(e){res.json({error:e.message});}};
exports.verify=async(req,res)=>{try{await LSP.findByIdAndUpdate(req.params.id,{verified:true});res.json({message:'Lawyer Verified'});}catch(e){res.json({error:e.message});}};
