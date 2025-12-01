const r=require('express').Router(); const jwt=require('jsonwebtoken'); const c=require('../controllers/lspController');
function a(req,res,next){try{const t=req.headers.authorization?.split(' ')[1];req.user=jwt.verify(t,process.env.JWT_SECRET);next();}catch{res.json({error:'Unauthorized'});}}
function admin(req,res,next){if(req.user.role==='admin')next();else res.json({error:'Admin only'});}
r.post('/register',a,c.createProfile); r.get('/',a,admin,c.getPending); r.post('/verify/:id',a,admin,c.verify);
module.exports=r;
