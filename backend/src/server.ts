import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
const mongoUri = process.env.DATABASE_URL;
if (!mongoUri) {
  console.error(
    "No MongoDB connection string. Set DATABASE_URL in your environment variables."
  );
  process.exit(1);
}

mongoose
  .connect(mongoUri, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
