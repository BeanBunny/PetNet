import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as adminController from "../controller/adminController.js";

const adminRoutes = express.Router();

adminRoutes.get("/sign-up-requests", adminController.getSignUpRequests);

adminRoutes.post("/signin", adminController.postSignIn);

adminRoutes.get("/signup", adminController.getSignup);

adminRoutes.get("/ban-user", adminController.getBanUser);

adminRoutes.post("/ban-user", adminController.postBanUser);

//add routes for clinic accept reject

export default adminRoutes;
