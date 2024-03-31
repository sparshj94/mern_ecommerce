import { Router } from "express";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  updateCategory,
  categories,
  singleCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = Router();

//create route
router.route("/create-category").post(requireSignIn, isAdmin, createCategory);

//update category route
router
  .route("/update-category/:id")
  .put(requireSignIn, isAdmin, updateCategory);

// get all categories
router.route("/allCategories").get(categories);

//single category route
router.route("/single-category/:slug").get(singleCategory);

//delete category
router
  .route("/delete-category/:id")
  .delete(requireSignIn, isAdmin, deleteCategory);

export default router;
