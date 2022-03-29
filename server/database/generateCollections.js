// const mongoose = require("mongoose");

async function generateCollections(db, collections_list) {
  console.log(db.collection.collectionName);
  collections_list.forEach((element) => {
    db.createCollection(element, (err, collection) => {
      if (err) {
        console.log(`Collection ${element} already exists`);
      } else {
        console.log(`Collection created ${element}`);
      }
    });
  });
}

// mongoose.connect("mongodb://localhost/petnet", (error, db) => {
//   if (error) {
//     console.log("DB connection can not be established");
//   }

//   collections = [
//     "Pet Owner",
//     "Appointments",
//     "Vet Clinics",
//     "Verification",
//     "Admin",
//     "Banned Vets",
//     "Banned Pet Owners",
//     "Report Pet Owner",
//     "Report Clinic",
//   ];

//   generateCollections(db, collections);
// });
