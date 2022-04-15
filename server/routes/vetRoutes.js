import express from "express";
import * as vetController from "../controller/vetController.js";
import { vetRequireAuth as requireAuth } from "../middleware/requireAuth.js";

const vetRoutes = express.Router();

vetRoutes.post("/signup", vetController.postSignup);

vetRoutes.post("/signin", vetController.postSignin);

export default vetRoutes;
