const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },
    elections:{
        type: [Schema.Types.ObjectId],
        ref: 'Election',
    },
    voters:{
        type: [Schema.Types.ObjectId],
        ref: 'Voter',
    }
})

module.exports = mongoose.model("Region", regionSchema);