const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminModel = new Schema({
    email:{
      type:String,
      required:true  
    },
    password:{
        type:String,
        required: true
    },
    region:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Admin", adminModel);