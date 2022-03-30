import mongoose from "mongoose";
import { models } from "./schema.js";
const petOwner = models[0];
const admin = models[1];
//import more models as schema is made

//On establishing connection, collections from models are automatically added to db if they dont exist there
mongoose.connect("mongodb://localhost/petnet", (error, db) => {
  if (error) {
    console.log("DB connection can not be established");
  } else {
    //check petowner
    let testPetOwner = new petOwner({
      name: "Martin Scorcese",
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
});

//Ignore
//.\mongod.exe --dbpath=C:\Users\HP\mongodb-data
//C:\Users\HP\mongodb\bin
