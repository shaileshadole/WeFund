import ErrorHandler from "../middlewares/error.js";
import { Campaign } from "../models/campaignModel.js";

export const newCampaign = async (req, res, next) => {
  try {
    const { title, story, target, endDate, imageLink } = req.body;

    await Campaign.create({
      title,
      story,
      target,
      endDate,
      imageLink,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "New Campaign Created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyCampaign = async (req, res, next) => {
  try {
    const userid = req.user._id;

    const myCampaigns = await Campaign.find({ user: userid }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      myCampaigns,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCampaign = async (req, res, next) => {
  try {
    const userid = req.user._id;

    const allCampaigns = await Campaign.find().sort({ createdAt: -1 });
    // const allCampaigns = await Campaign.find().populate("user").sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      allCampaigns,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCampaign = async (req, res, next) => {
  try {
    const campaignId = req.params.id;

    const campaign = await Campaign.findById(campaignId);

    if (!campaign) return next(new ErrorHandler("Campaign Not Found", 404));

    const { title, story, target, endDate, imageLink } = req.body;

    campaign.title = title;
    campaign.story = story;
    campaign.target = target;
    campaign.endDate = endDate;
    campaign.imageLink = imageLink;

    await campaign.save();

    res.status(200).json({
      success: true,
      message: "Campaign Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCampaign = async (req, res, next) => {
  try {
    const campaignId = req.params.id;

    const campaign = await Campaign.findOne({ _id: campaignId });

    if (!campaign)
      return next(new ErrorHandler("Campaign did not found!", 404));

    await campaign.deleteOne();

    res.status(200).json({
      success: true,
      message: "Campaign Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
