import express from "express";
import * as petOwnerController from "../controller/petOwnerController.js";
import { petOwnerRequireAuth as requireAuth } from "../middleware/requireAuth.js";

const petOwnerRoutes = express.Router();

petOwnerRoutes.post("/signup", petOwnerController.postSignUp);

petOwnerRoutes.post("/signin", petOwnerController.postSignIn);

petOwnerRoutes.post("/add-pet", requireAuth, petOwnerController.postAddPet);

petOwnerRoutes.post(
  "/remove-pet",
  requireAuth,
  petOwnerController.postRemovePet
);

petOwnerRoutes.get("/profile", requireAuth, petOwnerController.getProfile);

petOwnerRoutes.post(
  "/profile-customization/general",
  requireAuth,
  petOwnerController.postUpdateProfileGeneral
);

petOwnerRoutes.post(
  "/profile-customization/password",
  requireAuth,
  petOwnerController.postUpdateProfilePassword
);

petOwnerRoutes.post(
  "/profile-customization/pet",
  requireAuth,
  petOwnerController.postUpdatePetProfile
);

petOwnerRoutes.get(
  "/past-appointments",
  requireAuth,
  petOwnerController.getPastAppointments
);

petOwnerRoutes.post(
  "/set-appointment",
  requireAuth,
  petOwnerController.postSetAppointment
);

petOwnerRoutes.post(
  "/report-vet",
  requireAuth,
  petOwnerController.postReportVet
);

petOwnerRoutes.get("/get-clinics", requireAuth, petOwnerController.getClinics);

export default petOwnerRoutes;
