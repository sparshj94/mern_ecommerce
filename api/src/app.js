import express from "express";
import cors from "cors";
import Razorpay from "razorpay";
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Working</h1>");
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
