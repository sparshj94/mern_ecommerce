import { Router } from "express";
import {
  checkout,
  paymentVerification,
  getKey,
} from "../controllers/payment.controller.js";
const router = Router();

router.route("/checkout").post(checkout);
router.route("/paymentVerification").post(paymentVerification);
router.route("/getkey").post(getKey);
export default router;
