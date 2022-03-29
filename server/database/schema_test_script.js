const mongoose = require("mongoose");
const models = require("./schema");
const petOwner = models[0];
const admin = models[1];
//import more models as schema is made

//On establishing connection, collections from models are automatically added
mongoose.connect("mongodb://localhost/petnet", (error, db) => {
  if (error) {
    console.log("DB connection can not be established");
  } else {
    //script to check admin schema
    let newAdmin = new admin({
      email: "abc@gmail.com",
      password: "qwertyuiop123$$",
    });
    newAdmin
      .save()
      .then(() => {
        console.log("New Admin saved");
      })
      .catch((err) => console.log("Err in saving", err));
  }
});
