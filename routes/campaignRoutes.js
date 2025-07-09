import express from "express";
import { deleteCampaign, getAllCampaign, getMyCampaign, newCampaign, updateCampaign } from "../controllers/campaignControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newCampaign);
router.get("/my", isAuthenticated, getMyCampaign);
router.get("/all", isAuthenticated, getAllCampaign);
router.put("/:id", isAuthenticated, updateCampaign);
router.delete("/:id", isAuthenticated, deleteCampaign);

export default router;