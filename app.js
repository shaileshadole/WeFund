import express from "express";
import userRoutes from "./routes/userRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
});

// CORS Setup
const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
};

app.use(cors(corsOptions));

//Using Middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/campaign", campaignRoutes);
app.use("/api/v1/donation", donationRoutes);

app.get("/", (req, res) => {
    res.send("Nice Working");
})

//Using Error Middleware
app.use(errorMiddleware);

