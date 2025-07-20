import cron from "node-cron";
import { User } from "../models/userModel.js"; // adjust path accordingly

// Run at 12:00 AM every day
cron.schedule("0 0 * * *", async () => {
  try {
    const result = await User.updateMany({}, { $inc: { balance: 100 } });
    console.log("Updated balances for users:", result.modifiedCount);
  } catch (error) {
    console.error("Error updating balances:", error);
  }
});
