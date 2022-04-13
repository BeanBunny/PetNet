import express from "express";
import * as vetController from "../controller/vetController.js";
import { vetRequireAuth as requireAuth } from "../middleware/requireAuth.js";

import * as vetController from "../controller/vetController.js";

const vetRoutes = express.Router();

vetRoutes.post("/signup", vetController.postSignup);

vetRoutes.get("/signup", vetController.getSignup);

export default vetRoutes;
