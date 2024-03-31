import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import slugify from "slugify";

//create category
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new ApiError(401, "Name is required");
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      throw new ApiResponse(200, { success: true }, "Category already exist");
    }

    const category = await Category.create({
      name,
      slug: slugify(name),
    });
    return res.send(
      new ApiResponse(200, { success: true, category }, "Category created")
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(500, { success: false }, "Error in Category");
  }
};

//update category

export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.send(
      new ApiResponse(
        200,
        { success: true, category },
        "category updated successfully"
      )
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(400, "Error while updating");
  }
};

//get all categories
export const categories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.send(
      new ApiResponse(200, { success: true, categories }, "All Categories List")
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      { success: false },
      "Error while getting all categories"
    );
  }
};

//get single category
export const singleCategory = async (req, res) => {
  // const { slug } = req.params.slug;
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.send(
      new ApiResponse(
        200,
        { success: true, category },
        "single category",
        category
      )
    );
    // console.log(category);
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      { success: false, error },
      "Error while getting single category"
    );
  }
};

//delete category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    // const category = await Category.findOneAndDelete(id);
    const category = await Category.findByIdAndDelete(id);
    res.send(
      new ApiResponse(
        200,
        { success: true, category },
        "Category created deleted",
        category
      )
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(500, { success: true }, "Error while deleting category");
  }
};
