import "dotenv/config";
import express from "express";

const PORT = 8000;

const app = express();

// middleware
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

// database connection
import db from "../api-store/config/db.js";
db();

import productRouter from "./src/router/productRouter.js";
import categoryRouter from "./src/router/categoryRouter.js";
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.get("/", (req, res) => {
  res.json({
    message: "parin collection api",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running on http://localhost/${PORT}`);
});
