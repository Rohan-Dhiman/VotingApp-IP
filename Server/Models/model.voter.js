const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VoterModel = new Schema({
    name:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
        
    },
    AadharId:{
        type:String,
        required:true,
        unique:true
    },
    mobileNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("Voter", VoterModel);