const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },
    name: {
        type: String,
        required: true,
        unique: true
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