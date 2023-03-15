const {Router}= require('express');
//const file = require('fs-extra/lib/ensure/file');
//const { base } = require('../models/IMAGE');
const router=Router();
//const Image=require('../models/IMAGE')
//const fs = require('fs');
//const IMAGE = require('../models/IMAGE');
const { MulterError } = require('multer');
const multer = require('multer');
const Prod = require('../../models/PRODUCTOS');



router.get('/', async (req,res)=>{


    const prods= await Prod.find().lean();
   // res.render("product.hbs", );

   
    res.render('index.ejs',{prods})
});



module.exports=router;