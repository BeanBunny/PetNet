import express from "express";
import * as petOwnerController from "../controller/petOwnerController.js";
import { petOwnerRequireAuth as requireAuth } from "../middleware/requireAuth.js";

const petOwnerRoutes = express.Router();

petOwnerRoutes.post("/signup", petOwnerController.postSignUp);

petOwnerRoutes.post("/signin", petOwnerController.postSignIn);

petOwnerRoutes.post("/add-pet", petOwnerController.postAddPet);

petOwnerRoutes.post("/remove-pet", petOwnerController.postRemovePet);

petOwnerRoutes.get("/profile", petOwnerController.getProfile);

petOwnerRoutes.post("/profile-customization/general", petOwnerController.postUpdateProfileGeneral);

petOwnerRoutes.post(
    "/profile-customization/password",
    petOwnerController.postUpdateProfilePassword
);

petOwnerRoutes.post("/profile-customization/pet", petOwnerController.postUpdatePetProfile);

petOwnerRoutes.get("/past-appointments", petOwnerController.getPastAppointments);

petOwnerRoutes.post("/set-appointment", petOwnerController.postSetAppointment);

petOwnerRoutes.post("/report-vet", petOwnerController.postReportVet);

export default petOwnerRoutes;
