import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "WeFund",
    })
    .then((c) => console.log(`✅ MongoDB Connected: ${c.connection.host}`))
    .catch((e) => console.error("❌ MongoDB Atlas Connection Error:", e.message));
};
