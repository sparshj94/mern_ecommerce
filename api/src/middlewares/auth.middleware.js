import JWT from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Authorization token missing");
    }
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin middlewares
export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      throw new ApiError(401, "Unathourizerd access");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    new ApiError(401, "Error in admin middlewares");
  }
};
