import express from "express";
import {
  donateToCampaign,
  getCampaignDonors,
  userDonationHistory,
} from "../controllers/donationControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new/:campaignId", isAuthenticated, donateToCampaign);
router.get("/:id/donors", getCampaignDonors);
router.get("/mydonations", isAuthenticated, userDonationHistory);

export default router;
