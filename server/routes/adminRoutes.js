import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as adminController from "../controller/adminController.js";

const adminRoutes = express.Router();

adminRoutes.get("/sign-up-requests", adminController.getSignUpRequests);

adminRoutes.post("/signup", adminController.postSignup);

adminRoutes.get("/signup", adminController.getSignup);

adminRoutes.get("/ban-user", adminController.getBanUser);

adminRoutes.post("/ban-user", adminController.postBanUser);

export default adminRoutes;
