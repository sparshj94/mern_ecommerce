import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      // type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    coverImage: {
      type: String, ///cloudinary url
      required: true,
    },
    multipleImage: {
      type: Array, //cloudinary url
      default: ["", "", ""],
    },
    shipping: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
