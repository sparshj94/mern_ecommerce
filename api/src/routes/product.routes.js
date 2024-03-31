import { Router } from "express";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  getSingleProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

//routes
router.route("/create-product").post(
  requireSignIn,
  isAdmin,
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    {
      name: "multipleImage",
      maxCount: 4,
    },
  ]),
  createProduct
);

//get all products
router.route("/get-all-product").get(getAllProduct);

//get product route bsed on category
router.route("/get-product/:pid").get(getProduct);

//get single product route
router.route("/single-product/:slug").get(getSingleProduct);

//delete prodduct
router.route("/product/:pid").delete(deleteProduct);

export default router;
