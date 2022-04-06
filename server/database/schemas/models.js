import { petowner_model } from "./petowner_schema.js";
import { appointment_model } from "./appointment_schema.js";
import { admin_model } from "./admin_schema.js";
import { reportPetOwner_model } from "./report_petowner_schema.js";
import { reportClinic_model } from "./report_clinic_schema.js";
import { clinic_model } from "./clinic_schema.js";
import { verification_model } from "./verification_schema.js";
import { banned_clinic_model } from "./banned_clinic_schema.js";
import { banned_petowner_model } from "./banned_petowners_schema.js";

export const models = {
    petowner: petowner_model,
    admin: admin_model,
    appointment: appointment_model,
    report_petowner: reportPetOwner_model,
    report_clinic: reportClinic_model,
    clinic: clinic_model,
    verification_clinic: verification_model,
    banned_clinic: banned_clinic_model,
    banned_petowner: banned_petowner_model,
};
