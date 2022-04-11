import express from "express";
import * as petOwnerController from "../controller/petOwnerController.js";
import requireAuth from "../middleware/requireAuth.js";

const petOwnerRoutes = express.Router();

petOwnerRoutes.post("/add-pet", petOwnerController.postAddPet);

petOwnerRoutes.post("/remove-pet", petOwnerController.postRemovePet);

petOwnerRoutes.get("/profile", petOwnerController.getProfile);

petOwnerRoutes.post("/profile-customization/general", petOwnerController.postUpdateProfileGeneral);

export default petOwnerRoutes;
