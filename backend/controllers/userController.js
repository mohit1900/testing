import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import bcrypt from "bcrypt";
import { sendJWTToken } from "../utils/sendJWTToken.js";
import { Token } from "../models/Token.js";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";

export const signup = catchAsyncError(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return next(new ErrorHandler("Enter all the fields", 401));

  const check = await User.findOne({ email });

  if (check)
    return next(new ErrorHandler("Email already present try another", 400));

  const user = await User.create({ username, email, password });

  const check2 = await Token.findOne({ userId: user._id });

  if (check2) {
    await Token.findOneAndDelete({ userId: user._id });
  }

  const generatedToken = crypto.randomBytes(20).toString("hex");
  const generatedToken2 = crypto
    .createHash("sha256")
    .update(generatedToken)
    .digest("hex");

  const token = await Token.create({
    userId: user._id,
    token: generatedToken2,
    message: `Email Verification Send To ${user.email}`,
  });

  const url = `${process.env.FRONTEND_URL}/verify/${generatedToken2}`;

  const message = `Click on the link to verfiy the account. ${url} If you have not requested then please ignore.`;

  await sendEmail(user.email, "Account Verification", message);

  res.status(200).json({
    success: true,
    user,
  });
});

export const verify = catchAsyncError(async (req, res, next) => {
  const token = req.body.token;

  if (!token) return next(new ErrorHandler("Page Not Found!", 401));

  const tokenFound = await Token.findOne({ token });

  if (!tokenFound)
    return next(new ErrorHandler("Invalid token or Limit Exceeded", 401));

  const user = await User.findById(tokenFound.userId);

  if (!user)
    return next(new ErrorHandler("Invalid token or Limit Exceeded", 401));

  user.isVerified = true;
  await user.save();

  res.status(200).json({
    success: true,
    message: "User Verified Successfully",
    user,
  });
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email, password);

  if (!email || !password)
    return next(new ErrorHandler("Enter all the fields", 401));

  const user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler("Invalid email or password", 401));

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return next(new ErrorHandler("Invalid email or password", 401));

  sendJWTToken(res, user, `Welcome Back ${user.username}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("authToken", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});
