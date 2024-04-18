import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// if post request, it will get passed to the MyUserController.createCurrentUser
router.post("/", MyUserController.createCurrentUser);

export default router;
