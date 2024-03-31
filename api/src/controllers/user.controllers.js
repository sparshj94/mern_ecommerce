import { comparePassword, hashPassword } from "../helpers/passHelper.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import JWT from "jsonwebtoken";

//register controller
const registerUser = async (req, res) => {
  //get data from user req,body
  //validation to fill all details
  //check for existing user
  //if new user theen save details in db with hased password

  const { name, email, password, phone, address } = req.body;
  //valdiation
  if (
    [name, email, password, phone, address].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //checking for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User already exist Please Login");
  }

  //saving for new user with hashed password
  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    address,
    phone,
    password: hashedPassword,
  });

  //check users registered or not if not giver error
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "error in registration");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, { success: true, user }, "Usre created successfully")
    );
};

///login controller
const loginUser = async (req, res) => {
  //get details from user
  //check all details are filled (validation)
  //check for user exist in db or not with correct password

  try {
    //get details from user
    const { email, password } = req.body;
    //validation
    if (!email && !password) {
      throw new ApiError(400, "email and password required");
    }

    //check user exist or not
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(404, "User not exist");
    }

    //password checking of user in db
    // console.log(password);
    // console.log(User.password);
    const matchUser = await comparePassword(password, user.password);
    if (!matchUser) {
      throw new ApiError(401, "Invalid user crediantal");
    }

    //generate token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.send(
      new ApiResponse(
        200,
        {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
          },
          token,
        },

        "Login successfully"
      )
    );
  } catch (error) {
    console.log(error);
  }
};

//forgot password
const forgotPassword = async (req, res) => {
  //get email,question,newpassword
  //check all details entered or not
  try {
    const { email, answer, newPassword } = req.body;
    if (!email && !answer && !newPassword) {
      throw new ApiError(400, "All fields are required");
    }
    //check for user
    const user = await User.findOne({ email, answer });
    //validation
    if (!user) {
      throw new ApiError(404, { success: false }, "Inncorrect email or answer");
    }

    const hashed = await hashedPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hased });
    res
      .send(200)
      .send({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    throw new ApiError(400, { success: false }, "something went wrong");
  }
};

//test router
const testUser = (req, res) => {
  res.send("protected route");
};
export { registerUser, loginUser, testUser, forgotPassword };
