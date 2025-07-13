import ErrorHandler from "../middlewares/error.js";
import { Campaign } from "../models/campaignModel.js";
import { Donation } from "../models/donationModel.js";

//Adding the transaction
export const donateToCampaign = async (req, res, next) => {
  try {
    const { amount } = req.body;
    const { campaignId } = req.params;

    const campaign = await Campaign.findById(campaignId);
    if (!campaign) return next(new ErrorHandler("Campaign not found", 404));

    campaign.donatedTillNow += Number(amount);
    campaign.save();

    const donation = await Donation.create({
      campaign: campaignId,
      donor: req.user._id,
      donorName: req.user.name,
      amount,
      title: campaign.title,
      endDate: campaign.endDate,
    });

    res.status(201).json({
      success: true,
      message: "Donation Sucessfull",
      donation,
    });
  } catch (error) {
    next(error);
  }
};

//Get all the donors of the specific Campaign
export const getCampaignDonors = async (req, res, next) => {
  try {
    const { id } = req.params;

    const donors = await Donation.find({ campaign: id })
      .populate("donor", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donors,
    });
  } catch (error) {
    next(error);
  }
};

// Get full donation history of a user
export const userDonationHistory = async (req, res, next) => {
  try {
    const history = await Donation.find({ donor: req.user._id })
      .populate("campaign", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    next(error);
  }
};
