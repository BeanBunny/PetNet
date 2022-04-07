import express from "express";
// import requiresAuth from "express-openid-connect";
// import auth0 from "auth0-js";
import * as vetController from "../controller/vetController.js";

const vetAuthRoutes = express.Router();

vetAuthRoutes.post("/signup", vetController.postSignup);

vetAuthRoutes.get("/signup", vetController.getSignup);

export default vetAuthRoutes;
