import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    donorName: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    title:{
      type: String
    },
    endDate: {
      type: Date
    }
  },
  { timestamps: true }
);

export const Donation = mongoose.model("Donation", schema);
