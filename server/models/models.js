import { petOwnerModel } from "./petOwnerModel.js";
import { appointmentModel } from "./appointmentModel.js";
import { adminModel } from "./adminModel.js";
import { reportPetOwnerModel } from "./reportPetOwnerModel.js";
import { reportClinicModel } from "./reportClinicModel.js";
import { clinicModel } from "./clinicModel.js";
import { verificationModel } from "./verificationModel.js";
import { bannedClinicModel } from "./bannedClinicModel.js";
import { bannedPetOwnersModel } from "./bannedPetOwnersModel.js";

export const models = {
  petOwner: petOwnerModel,
  admin: adminModel,
  appointment: appointmentModel,
  reportPetOwner: reportPetOwnerModel,
  reportClinic: reportClinicModel,
  clinic: clinicModel,
  verificationClinic: verificationModel,
  bannedClinic: bannedClinicModel,
  bannedPetOwners: bannedPetOwnersModel,
};
