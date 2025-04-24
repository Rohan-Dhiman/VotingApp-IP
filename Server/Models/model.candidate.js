const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateModel = new Schema({

    Name:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String,
        required:true
    },
    partyLogo:{
        data:Buffer,
        contentType:String,
        required:true
    },
    votesCount:{
        type:Number
    },
    Votes:[{
        type:Schema.Types.ObjectId,
        ref: "votes"
    }]
    
});

module.exports = mongoose.model("Candidate", candidateModel);
