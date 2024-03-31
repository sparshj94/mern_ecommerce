import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: "949634366163597",
  api_secret: "cMmUZKj5uAstH_V7ua-L8KkMElE",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // console.log(localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //remove locally save temp file even after successfull upload on cloudinary
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log(error.message);
    fs.unlinkSync(localFilePath);
    //remove the locally save temp file as upload gets failed
    return null;
  }
};

export { uploadOnCloudinary };
