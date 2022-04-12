import { models } from "./models.js";
import mongoose from "mongoose";

//On establishing connection, collections from models are automatically added to db if they dont exist there
mongoose.connect("mongodb://localhost/petnet", (error, db) => {
  if (error) {
    console.log("DB connection can not be established");
  } else {
    // console.log("DB connected");
    // //check petowner insertion
    // models
    //   .petOwner({
    //     name: "Martin Scorsese",
    //     phone: "03009988770", //check regex
    //     email: "scorcese@gmail.com", //invalid email
    //     password: "qwertyuiop123$$",
    //     pet: [
    //       {
    //         pet_type: "Dog",
    //         pet_name: "De Niro",
    //       },
    //       {
    //         pet_type: "Dog",
    //         pet_name: "De Liro",
    //       },
    //       {
    //         pet_type: "Cat",
    //         pet_name: "Billo Raani",
    //       },
    //     ],
    //     location: {
    //       lat: 3000,
    //       long: 898,
    //       city: "Lahore",
    //     },
    //   })
    //   .save()
    //   .then((res) => {
    //     console.log("Pet owner1 added", res);
    //   })
    //   .catch((err) => {
    //     console.log("Error in adding pet owner1", err.message);
    //   });
    // models
    //   .petOwner({
    //     name: "Martin S",
    //     phone: "03009988776", //check regex
    //     email: "scorc@gmail.com", //invalid email
    //     password: "qwertyuiop123$$",
    //     pet: [
    //       {
    //         pet_type: "Dog2",
    //         pet_name: "De Niro2",
    //       },
    //       {
    //         pet_type: "Dog2",
    //         pet_name: "De Liro2",
    //       },
    //       {
    //         pet_type: "Cat2",
    //         pet_name: "Billo Raani2",
    //       },
    //       ,
    //       {
    //         pet_type: "Cat3",
    //         pet_name: "3323",
    //       },
    //     ],
    //     location: {
    //       lat: 3000,
    //       long: 898,
    //       city: "Lahore",
    //     },
    //   })
    //   .save()
    //   .then((res) => {
    //     console.log("Pet owner2 added", res);
    //   })
    //   .catch((err) => {
    //     console.log("Error in adding pet owner2", err.message);
    //   });

    // const ownerPromises = pets.map((value) => getOwner(value, 1000));
    // const ownerIds = await Promise.all(ownerPromises);
    // console.log(ownerIds);

    async function InsertApppointmnet() {
      const petOwner = await models.petOwner.findOne({
        name: "Martin S",
      });
      const vet = await models.clinic.findOne({
        email: "saadclinic@gmail.com",
      });
      const appointmentPetowner = await models
        .appointment({
          type: "death",
          date: new Date(),
          time: new Date(),
          status: "approved",
          petowner_id: petOwner._id,
          pet_id: petOwner.pet[0]._id,
          vet_id: vet._id,
        })
        .save()
        .catch((err) => console.log(err.message));
    }

    // InsertApppointmnet();
    const getAppointments = async (req, res) => {
      //vet object received
      const vetId = req._id; //change
      // query appointments table for the particular clinic
      const appointmentsList = await models.appointment.find({
        vet_id: vetId,
        // status: "completed", //change
      });
      if (appointmentsList.length == 0) {
        return res.send([]);
      }
      // get all petowner and pet ids
      let petOwnerIds = [];
      let petIdLists = [];
      appointmentsList.forEach((element) => {
        petOwnerIds.push(element.petowner_id);
        petIdLists.push(element.petowner_id);
      });
      // get all petwner details (order would change so for loops rearrange)
      const petOwners2 = await models.petOwner.find({
        _id: { $in: petOwnerIds },
      });
      let petOwners = [];
      for (let i = 0; i < petOwnerIds.length; i++) {
        for (let j = 0; j < petOwners2.length; j++) {
          if (petOwners2[j]._id.equals(petOwnerIds[i])) {
            petOwners.push(petOwners2[j]);
            break;
          }
        }
      }
      let result = [];
      //get all pet types
      let petTypes = [];
      //for every petowner, go through the list of pets and match the id from appointment to get pet type
      for (let i = 0; i < petOwners.length; i++) {
        let listOfPets = petOwners[i].pet;
        let appointmentPetId = appointmentsList[i].pet_id;

        for (let j = 0; j < listOfPets.length; j++) {
          // console.log(appointmentPetId);
          // console.log(listOfPets[j]._id);
          if (appointmentPetId.equals(listOfPets[j]._id)) {
            // console.log(listOfPets);
            petTypes.push(listOfPets[j].pet_type);
          }
        }
        // console.log(petTypes);
        result[i] = {
          appointment_type: appointmentsList[i].type,
          pet_type: petTypes[i],
          petowner_name: petOwners[i].name,
          petowner_phone: petOwners[i].phone,
          appointment_time: appointmentsList[i].date,
          appointment_status: appointmentsList[i].status,
        };
      }
      result.sort((a, b) => {
        return b.appointment_time - a.appointment_time;
      });
      console.log(result);
    };
    async function test() {
      const vet = await models.clinic.findOne({
        email: "saadclinic@gmail.com",
      });
      getAppointments(vet, 2);
    }
    // test();

    const getServices = async (req, res) => {
      //vet_id required (any vet index would work)
      const vet_email = req;
      try {
        let vet = await models.clinic.findOne({ email: vet_email });
        console.log(vet);
        let servicesList = vet.services;
        //where each service has name description and price
        console.log(servicesList);
        //return res.send("Service removed!");
      } catch (err) {
        return res.status(422).send(err.message);
      }
    };
    // getServices("saadclinic2@gmail.com", 0);

    // script to check admin
    // models
    //   .admin({
    //     email: "abc@gmail.com",
    //     password: "qwertyuiop123$$",
    //   })
    //   .save()
    //   .then((res) => {
    //     console.log("New Admin saved:", res);
    //   })
    //   .catch((err) => console.log("Err in saving", err.message));
    // //script to check report petowner
    // models
    //   .reportPetOwner({
    //     pet_owner_id: new mongoose.Types.ObjectId(),
    //     report_reason: "Spam appointments",
    //     vet_id: new mongoose.Types.ObjectId(),
    //   })
    //   .save()
    //   .then((res) => {
    //     console.log("New pet owner report saved:", res);
    //   })
    //   .catch((err) =>
    //     console.log("Err in saving pet owner report", err.message)
    //   );
    // //script to check clinic
    // models
    //   .clinic({
    //     cnic: "4230142301505",
    //     email: "saadclinic2@gmail.com",
    //     password: "saadkinglmao123$$",
    //     phone: "03000000000",
    //     clinic_name: "Murda Pets Clinic",
    //     //about_clinic: "", //not mandatory
    //     clinic_location: {
    //       Lat: 121,
    //       Long: 555,
    //     },
    //     pvmc_reg: {
    //       name: "Saad Malik",
    //       gender: "M",
    //       reg_num: 445004646546468,
    //       father_name: "Umair Yousaf",
    //     },
    //     services: [
    //       {
    //         service_name: "Deworming",
    //         description: "Worm nikaal jaani",
    //         price: 500,
    //       },
    //       {
    //         service_name: "Vaccination",
    //         description:
    //           "Get your pet vaccinated, price includes all annual vaccinations",
    //         price: 2000,
    //       },
    //       {
    //         service_name: "Grooming",
    //         description: "Haircut and nails cut",
    //         price: 1000,
    //       },
    //     ],
    //   })
    //   .save()
    //   .then((res) => {
    //     console.log("New clinic saved:", res);
    //   })
    //   .catch((err) => console.log("Err in saving clinic", err.message));
    // models
    //   .verificationClinic({
    //     cnic: "4230142301111",
    //     email: "saadclinic@gmail.com",
    //     password: "saadkinglmao123$$",
    //     phone: "03030303039",
    //     clinic_name: "fahad Pets Clinic",
    //     clinic_location: {
    //       long: 22,
    //       lat: 22,
    //     },
    //     PVMC_reg: {
    //       name: "Saad 2222",
    //       gender: "F",
    //       reg_num: 4454546465468,
    //       father_name: "Umair Yousaf2222",
    //     },
    //   })

    //   .save()
    //   .catch((err) => console.log(err.message));
    // const Temp = async () => {
    //   const temp = await models.admin.find({ email: "abc@gmail.com" });
    //   console.log(temp);
    //   await models.admin.deleteOne({ email: temp.email }); // temp.remove();
    // };
    // Temp();
  }
});

//Ignore
//.\mongod.exe --dbpath=C:\Users\HP\mongodb-data
//C:\Users\HP\mongodb\bin
