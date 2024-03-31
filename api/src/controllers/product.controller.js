import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import slugify from "slugify";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.body;
    // console.log(name, description, price, category, quantity);
    if (
      [name, description, price, category, quantity].some(
        (fields) => fields?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    const multipleImageLocalPath = req.files?.multipleImage[0]?.path;
    if (!coverImageLocalPath) {
      throw new ApiError(400, "Cover image is required");
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    const multipleImage = await uploadOnCloudinary(multipleImageLocalPath);

    if (!coverImage) {
      throw new ApiError(400, "cover image is required");
    }

    const products = await Product.create({
      name,
      slug: slugify(name),
      description,
      price,
      category,
      quantity,
      coverImage: coverImage.url,
      multipleImage: multipleImage.url,
    });

    res.send(new ApiResponse(200, products, "product added successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, { success: false }, "Error in creatin product");
  }
};

//get all Products based on category

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.pid })
      .limit(12)
      .sort({ createdAt: -1 });
    res.send(
      new ApiResponse(
        200,
        { success: true, products },
        "All Products",
        products
      )
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      { success: false },
      "Error in getting all products"
    );
  }
};

//get all Product
export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({}).limit(4).sort({ createdAt: -1 });
    res.send(
      new ApiResponse(
        200,
        { success: true, products },
        "All Products",
        products
      )
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      { success: false },
      "Error in getting all products"
    );
  }
};

//get single product

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).populate(
      "category"
    );
    // console.log(product);
    res.send(
      new ApiResponse(200, { success: true, product }, "Single product Fetched")
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while getting single product");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.pid);
    res.send(
      new ApiResponse(200, { success: true }, "Product deleted succesdfully")
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      { success: false },
      "Error while deleting product",
      error
    );
  }
};
