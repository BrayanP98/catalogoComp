const {Schema, model} = require('mongoose');

const taskSchema= new Schema({
    categoria:{
        type:String,
        required:true,
        unique:false,
    },
    
    codigo:{
        type:String,
       
        unique:true,
        trim:true

    },
    nombre:{
        type:String,
       
        unique:true,
        trim:true

    },
    valor:{
        type:String,
        required:true,
        trim:true

     },
    descripcion:{
        type:String,
        required:true
     },
     done: Boolean,},{
        timestamps:true,
        versionKey:false
     
});
module.exports=model('product', taskSchema);