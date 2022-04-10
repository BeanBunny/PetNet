import { models } from "./models.js";
import mongoose from "mongoose";

//On establishing connection, collections from models are automatically added to db if they dont exist there
mongoose.connect("mongodb://localhost/petnet", (error, db) => {
    if (error) {
        console.log("DB connection can not be established");
    } else {
        console.log("DB connected");

        //check petowner insertion
        models
            .petOwner({
                name: "Martin Scorsese",
                phone: "03009988770", //check regex
                email: "scorcesegmail.com", //invalid email
                password: "qwertyuiop123$$",
                pet: [
                    {
                        pet_type: "Dog",
                        pet_name: "De Niro",
                    },

                    {
                        pet_type: "Dog",
                        pet_name: "De Liro",
                    },
                ],
                location: {
                    lat: 3000,
                    long: 898,
                    city: "Lahore",
                },
            })
            .save()
            .then((res) => {
                console.log("Pet owner added", res);
            })
            .catch((err) => {
                console.log("Error in adding pet owner", err.message);
            });

        //script to check admin
        models
            .admin({
                email: "abc@gmail.com",
                password: "qwertyuiop123$$",
            })
            .save()
            .then((res) => {
                console.log("New Admin saved:", res);
            })
            .catch((err) => console.log("Err in saving", err.message));

        //script to check report petowner
        models
            .reportPetOwner({
                pet_owner_id: new mongoose.Types.ObjectId(),
                report_reason: "Spam appointments",
                vet_id: new mongoose.Types.ObjectId(),
            })
            .save()
            .then((res) => {
                console.log("New pet owner report saved:", res);
            })
            .catch((err) => console.log("Err in saving pet owner report", err.message));

        //script to check clinic
        models
            .clinic({
                cnic: "4230142301555",
                email: "saadclinic@gmail.com",
                password: "saadkinglmao123$$",
                phone: "03030303030",
                clinic_name: "Saad Pets Clinic",
                //about_clinic: "", //not mandatory
                clinic_location: {
                    Lat: 121,
                    Long: 555,
                },
                pvmc_reg: {
                    name: "Saad Malik",
                    gender: "M",
                    reg_num: 445454646546468,
                    father_name: "Umair Yousaf",
                },
                Services: [
                    {
                        service_name: "Deworming",
                        description: "Worm nikaal jaani",
                        price: 500,
                    },
                    {
                        service_name: "Vaccination",
                        description:
                            "Get your pet vaccinated, price includes all annual vaccinations",
                        price: 2000,
                    },
                    {
                        service_name: "Grooming",
                        description: "Haircut and nails cut",
                        price: 1000,
                    },
                ],
            })
            .save()
            .then((res) => {
                console.log("New clinic saved:", res);
            })
            .catch((err) => console.log("Err in saving clinic", err.message));

        models
            .verificationClinic({
                cnic: "4230142301111",
                email: "saadclinic@gmail.com",
                password: "saadkinglmao123$$",
                phone: "03030303039",
                clinic_name: "fahad Pets Clinic",
                clinic_location: {
                    long: 22,
                    lat: 22,
                },
                pvmc_reg: {
                    name: "Saad 2222",
                    gender: "F",
                    reg_num: 4454546465468,
                    father_name: "Umair Yousaf2222",
                },
            })
            .save()
            .catch((err) => console.log(err.message));

        models
            .verificationClinic({
                cnic: "4236969696969",
                email: "testclinic@gmail.com",
                password: "123$$",
                phone: "03030345687",
                clinic_name: "Nice Pets Clinic",
                clinic_location: {
                    long: 25,
                    lat: 25,
                },
                pvmc_reg: {
                    name: "Nubra 2222",
                    gender: "F",
                    reg_num: 9954546465468,
                    father_name: "Umair Yousaf",
                },
            })
            .save()
            .catch((err) => console.log(err.message));

        // models.admin.find({ email: "abcs@gmail.com" }, (err, res) => {
        //   console.log(res);
        // });
    }
});

//Ignore
//.\mongod.exe --dbpath=C:\Users\HP\mongodb-data
//C:\Users\HP\mongodb\bin
