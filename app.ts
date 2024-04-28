import express from "express";
import dotenv from "dotenv";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import authRoutes from "./routes/auth";
import connectDB from "./config/db";
import { rateLimiter } from "./middlewares/rate-limiter";
dotenv.config();

const app = express();

app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
app.use(rateLimiter);

app.use("/api/auth", authRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
