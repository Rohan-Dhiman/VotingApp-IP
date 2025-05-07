const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const regionSchema = new Schema({
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    Elections:{
        type: [Schema.Types.ObjectId],
        ref: 'Election',
    },
    voters:{
        type: [Schema.Types.ObjectId],
        ref: 'Voter',
    }

})