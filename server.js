import "dotenv/config";
import express from "express";

const PORT = 8000;

const app = express();

// middleware
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use("/", (req, res) => {
  res.json({
    message: "parin collection api",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running on http://localhost/${PORT}`);
});
