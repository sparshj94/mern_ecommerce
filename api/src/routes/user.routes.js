import { Router } from "express";
import {
  registerUser,
  loginUser,
  testUser,
  forgotPassword,
} from "../controllers/user.controllers.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const router = Router();

//refgister login route
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

//password forgot route
// router.route("/forgot-password", forgotPassword);

//test route
router.route("/test").get(requireSignIn, isAdmin, testUser);

//protected rouute
router.route("/user-auth").get(requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin router
router.route("/admin-auth").get(requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
