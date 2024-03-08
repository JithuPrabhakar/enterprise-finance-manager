import express from "express";
import { authUser, registerUser } from "../controllers/userControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/auth").post(authUser);

export default router;
