import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as vetAuthController from "../controller/vetAuthController.js";

const vetAuthRoutes = express.Router();

vetAuthRoutes.post("/signup", vetAuthController.postSignup);

vetAuthRoutes.get("/signup", vetAuthController.getSignup);

export default vetAuthRoutes;
