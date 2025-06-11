//importing dev dependencies
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

//importing functions
import connectDB from "./configs/database/db.js";
import authRouter from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

const PORT = process.env.PORT || 8000;

//allow multiple origins
const allowedOrigins = ["http://localhost:3000"];

//middleware config
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

//using the functions
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
