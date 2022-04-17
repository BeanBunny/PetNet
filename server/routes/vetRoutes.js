import express from "express";
import * as vetController from "../controller/vetController.js";
import { vetRequireAuth as requireAuth } from "../middleware/requireAuth.js";

const vetRoutes = express.Router();

vetRoutes.post("/signup", vetController.postSignup);

vetRoutes.post("/signin", vetController.postSignin);

vetRoutes.post("/get-appointments", requireAuth, vetController.getAppointments);

vetRoutes.post(
    "/accept-appointment",
    requireAuth,
    vetController.postAcceptAppointment
);

vetRoutes.post(
    "/reject-appointment",
    requireAuth,
    vetController.postRejectAppointment
);

vetRoutes.post(
    "/complete-appointment",
    requireAuth,
    vetController.postCompleteAppointment
);

vetRoutes.get("/get-details", requireAuth, vetController.getClinicDetails);

vetRoutes.post(
    "/edit-clinic-profile",
    requireAuth,
    vetController.postEditClinicProfile
);

vetRoutes.post("/delete-service", requireAuth, vetController.postDeleteService);

vetRoutes.post("/add-service", requireAuth, vetController.postAddService);

export default vetRoutes;
