import express from "express";
import { getUser, signIn, signUp, verifyEmail } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";

const userRoutes = express.Router();

userRoutes.get("/users", getUser);

userRoutes.post("/signUp", checkEmail, signUp);

userRoutes.get("/signIn", signIn);

userRoutes.get("/verify/:token",verifyEmail);

export default userRoutes;
