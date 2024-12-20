/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/products/", productRoutes)
app.use("/api/users/", userRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  connectDb();
  console.log(`Server starts at ${PORT}`);
});
