const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateModel = new Schema({

    name:{
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
        
    },
    partyLogo:{
        data:Buffer,
        contentType:String,
        
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
