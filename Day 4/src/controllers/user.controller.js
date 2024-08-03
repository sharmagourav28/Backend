import asyncHandler from "./../utils/asyncsHandler.js";
import { ApiError } from "./../utils/apiErrors.js";
import { User } from "./../models/user.model.js";
import { uploadOnCloudinary } from "./../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: "ok",
  // });

  // register krna k liya
  // get user details from frontend
  // validations - not empty
  // check if user alredy exists : username and email
  // check for images, check for avatar
  //  upload them to cloudinary,avatar
  // create user objects - create entry in db
  // remove password and frefresh token files frm response
  // check for user creation
  // return res

  const { fullName, email, username, password } = req.body;
  // frontend se data la rha h
  console.log("email :", email);
  // if (fullName === "") {
  //   throw new ApiError(400, "Fullname is required");
  // }

  if (
    [fullName, email, username, password].some((filed) => filed?.trim() === "")
  ) {
    throw new ApiError(400, "All fileds are required");
  }
  // register form validation check kar rha  h

  const existeduser = User.findOne({
    $or: [{ username }, { email }],
  });
  //  dekh rha h ki user already register h ki nhi
  if (existeduser) {
    throw new ApiError(409, "user already exists");
  }
  // kabhi register h to error show kro

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const avatarCoverImageLocalPath = req.files?.coverImage[0]?.path;
  // avatar or coverimage k path nekala
  if (!avatarCoverImageLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  // avatar image is required

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(avatarCoverImageLocalPath);
  // image or coverimage upload on cloudinary

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    useraname: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "something went wrong will registering the user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Register Suceesfully"));
});

export { registerUser };
