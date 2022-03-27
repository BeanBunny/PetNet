const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "petnet_database";

const { MongoClient, ObjectID, ConnectionClosedEvent } = require("mongodb");

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connected!");
    const db = client.db(databaseName);

    //filling db
    insertPetOwner(
      db,
      1,
      "09007860001",
      "abc@hotmail.com",
      "Abcd Efgh",
      "acb123$$$",
      1,
      "Dog",
      "tom"
    );
    insertAppointment(
      db,
      1,
      1,
      "Vaccine",
      "08/05/2022",
      "19:45",
      "pending",
      1,
      1
    );
  }
);

function insertPetOwner(
  db,
  pet_owner_id,
  phone_number,
  email,
  name,
  password,
  pet_id,
  pet_type,
  pet_name
) {
  db.collection("Pet Owners")
    .insertOne({
      pet_owner_id: pet_owner_id,
      phone_number: phone_number,
      email: email,
      name: name,
      password: password,
      pets: {
        pet_id: pet_id,
        type: pet_type,
        name: pet_name,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error in inserting pet owner", err);
    });
}

function insertAppointment(
  db,
  appointment_id,
  pet_id,
  appointment_type,
  date,
  time,
  status,
  pet_owner_id,
  vet_id
) {
  db.collection("Appointments")
    .insertOne({
      appointment_id: appointment_id,
      pet_id: pet_id,
      type_of_appointment: appointment_type,
      date: date,
      time: time,
      status: status,
      pet_owner_id: pet_owner_id,
      vet_id: vet_id,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error in inserting Appointment", err);
    });
}

//.\mongod.exe --dbpath=C:\Users\HP\mongodb-data  --start db command
//C:\Users\HP\mongodb\bin  --path to db.exe
