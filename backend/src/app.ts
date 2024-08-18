import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cardRoutes from "./routes/cardRoutes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/cards", cardRoutes);

// Ping route
app.get("/ping", (req: Request, res: Response) => {
  res.send("Server is running!");
});

export default app;
