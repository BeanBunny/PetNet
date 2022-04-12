import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as adminController from "../controller/adminController.js";
import { adminRequireAuth as requireAuth } from "../middleware/requireAuth.js";

const adminRoutes = express.Router();

adminRoutes.post("/signin", adminController.postSignIn);

adminRoutes.get("/sign-up-requests", requireAuth, adminController.getSignUpRequests);

adminRoutes.post("/accept-clinic", requireAuth, adminController.postAcceptRequest);

adminRoutes.post("/reject-clinic", requireAuth, adminController.postRejectRequest);

// adminRoutes.get("/signup", adminController.getSignup);

// adminRoutes.get("/ban-user", adminController.getBanUser);

adminRoutes.post("/ban-user", requireAuth, adminController.postBanUser);

//add routes for clinic accept reject

export default adminRoutes;
