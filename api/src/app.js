import express from "express";
import cors from "cors";
import Razorpay from "razorpay";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../../client/dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

//app router imports
import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/category.routes.js";
import productRouter from "./routes/product.routes.js";
import paymentRouter from "./routes/payment.routes.js";

//app router declaation
app.use("/api/v1/users", userRouter);

app.use("/api/v1/category", categoryRouter);

app.use("/api/v1/products", productRouter);

app.use("/api/v1/payment", paymentRouter);
export { app };
