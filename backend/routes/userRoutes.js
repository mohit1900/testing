import express from "express";
import {
  login,
  logout,
  signup,
  verify,
  getMyProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/verify").post(verify);
router.route("/me").get(isAuthenticated, getMyProfile);

export default router;
