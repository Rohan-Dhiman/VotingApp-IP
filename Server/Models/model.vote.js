const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VoteModel = new Schema({
    voter:{
        type:Schema.Types.ObjectId,
        ref: "model.voter"
    }
}, {timestamps:true})

module.exports = mongoose.model("Vote", VoteModel);