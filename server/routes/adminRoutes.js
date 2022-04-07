import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as adminController from "../controller/adminController.js";

const adminAuthRoutes = express.Router();

adminAuthRoutes.post("/signup", adminController.postSignup);

adminAuthRoutes.get("/signup", adminController.getSignup);

export default adminAuthRoutes;
