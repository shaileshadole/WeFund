import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const User = mongoose.model("User", schema);