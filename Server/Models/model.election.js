const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ElectionModel = new Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  description: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region", // Reference to the Region model
    required: true,
  },
  candidates: [
    {
        name: { type: String, required: true },
        party: { type: String },
        age: { type: Number },
        votes: { type: Number, default: 0 }, 
        image: { type: String }
    },
  ],
  voters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voter",
    },
  ],
  status: {
    type: String,
    enum: ["pending", "ongoing", "completed", "cancelled"], // Restrict possible values
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  results: [
    {
      candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model("Election", ElectionModel);
