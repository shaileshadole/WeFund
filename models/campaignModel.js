import mongoose, { Mongoose } from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export const Campaign = mongoose.model("Campaign", schema);
