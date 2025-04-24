const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ElectionModel = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    postion:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    startsOn:{
        type:Date,
        required:true
    },
    endsOn:{
        type:Date,
        required:true
    },
    candidates:[
        {
            type:Schema.Types.ObjectId,
            ref: "model.candidate"
        }
    ]

})

module.exports = mongoose.model("Election",ElectionModel);