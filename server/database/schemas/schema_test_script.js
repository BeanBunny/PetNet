import mongoose from "mongoose";
import { petowner_model } from "./petowner_schema.js";
import { appointment_model } from "./appointment_schema.js";
import { admin_model } from "./admin_schema.js";
import { reportPetOwner_model } from "./report_petowner_schema.js";
import { reportClinic_model } from "./report_clinic_schema.js";

const petOwner = petowner_model;
const admin = admin_model;
const appointment = appointment_model;
const report_petowner = reportPetOwner_model;
const report_clinic = reportClinic_model;
//import more models as schema is made

//On establishing connection, collections from models are automatically added to db if they dont exist there
mongoose.connect("mongodb://localhost/petnet", (error, db) => {
  if (error) {
    console.log("DB connection can not be established");
  } else {
    //check petowner
    let testPetOwner = new petOwner({
      name: "Martin Scorsese",
      phone: "03009988770", //check regex
      email: "scorcese@gmail.com",
      password: "qwertyuiop123$$",
      pet: {
        pet_type: "Dog",
        pet_name: "De Niro",
      },
    });
    testPetOwner
      .save()
      .then((res) => {
        console.log("Pet owner added", res);
      })
      .catch((err) => {
        console.log("Error in adding pet owner", err);
      });

    //script to check admin
    let testAdmin = new admin({
      email: "abc@gmail.com",
      password: "qwertyuiop123$$",
    });
    testAdmin
      .save()
      .then((res) => {
        console.log("New Admin saved:", res);
      })
      .catch((err) => console.log("Err in saving", err));
  }

  //script to check report petowner
  let testReportPetOwner = new report_petowner({
    pet_owner_id: new mongoose.Types.ObjectId(),
    report_reason: "Spam appointments",
    vet_id: new mongoose.Types.ObjectId(),
  });
  testReportPetOwner
    .save()
    .then((res) => {
      console.log("New pet owner report saved:", res);
    })
    .catch((err) => console.log("Err in saving pet owner report", err));
});

//Ignore
//.\mongod.exe --dbpath=C:\Users\HP\mongodb-data
//C:\Users\HP\mongodb\bin