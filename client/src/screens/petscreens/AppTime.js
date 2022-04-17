import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TopBar from "../../components/TopBar";
import Button from "../../components/Button";
import restApi from "../../api/restApi";
import { errorRequired } from "../../inputvalidation/validators";
import ErrorTextComponent from "../../components/ErrorTextComponent";

const Apptime = ({ navigation, route }) => {
    console.log(route.params, "<<<<<<<<<<<<<<<<<<<<<<<");
    let { date, type, vet_id } = route.params;
    const [time, setTime] = useState("");
    const [petList, setPetList] = useState([]);
    const [pet, setPet] = useState("");
    const timeSlots = [...Array(11).keys()].map((x) => ++x);

    const mapper = (list) => {
        return list.map((val) => {
            return (
                <Picker.Item
                    label={val.petName}
                    value={val._id}
                    key={val._id}
                />
            );
        });
    };

    const mappperTime = (list) => {
        return list.map((val) => {
            let label = val + ":00 PM";
            let value = val + 12 + ":00:00";
            return <Picker.Item label={label} value={value} key={value} />;
        });
    };

    const changingDate = () => {
        // date = date.toString().split(" ");
        date[4] = time;
        console.log(date, "M<<app time");
        return date.splice(1, 4).toString();
    };

    useEffect(async () => {
        let { data } = await restApi.get("/petowner/profile");
        setPetList(data.pet);
    }, []);
    console.log("timeeeeee", time.length);
    console.log("tppperrr", pet.length);
    let errorTime = errorRequired(time, "Time");
    let errorPet = errorRequired(pet, "Pet Name");
    console.log("-->", errorTime);
    console.log(errorPet);

    return (
        <View>
            <TopBar
                textStyle={styles.text}
                text="Set Time Slot"
                style={styles.bar}
            />
            <View style={styles.container}>
                <Text style={styles.text2}>Pick a Time</Text>
                <View style={styles.input}>
                    <Picker
                        selectedValue={time}
                        style={{ color: "black" }}
                        onValueChange={(itemValue, itemIndex) =>
                            setTime(itemValue)
                        }
                    >
                        <Picker.Item label="Time" value="" key={""} />
                        <Picker.Item
                            label="12:00 PM"
                            value="12:00:00"
                            key="12:00:00"
                        />
                        {mappperTime(timeSlots)}
                        {/* <Picker.Item label="3:00 PM" value="3:00 PM" />
                        <Picker.Item label="8:00 PM" value="8:00 PM" /> */}
                        {/* {mapper(list1)}; {mapper(list2)}; */}
                    </Picker>
                </View>
                <Text style={styles.text2}>Pick a Pet</Text>
                <View style={styles.input}>
                    <Picker
                        selectedValue={pet}
                        style={{ color: "black" }}
                        onValueChange={(itemValue, itemIndex) =>
                            setPet(itemValue)
                        }
                    >
                        <Picker.Item label="Pet Name" value="" key={""} />
                        {mapper(petList)}
                    </Picker>
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                {errorTime ? (
                    <Text style={{ color: "red" }}>{errorTime}</Text>
                ) : errorPet ? (
                    <Text style={{ color: "red" }}>{errorPet}</Text>
                ) : null}
            </View>
            {errorPet || errorTime ? (
                <Button style={styles.button} text="Confirm" disabled={true} />
            ) : (
                <Button
                    style={styles.button}
                    text="Confirm"
                    onChange={async () => {
                        date = changingDate();
                        console.log("pettt-->", pet);
                        console.log("dateeee-->", date);
                        console.log("type-->", type);
                        console.log("vet id-->", vet_id);
                        try {
                            let data = await restApi.post(
                                "/petowner/set-appointment",
                                {
                                    petId: pet,
                                    vetId: vet_id,
                                    type,
                                    date,
                                }
                            );
                            navigation.navigate("Clinics");
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                />
            )}
        </View>
    );
};

Apptime.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "#326273",
        marginHorizontal: "5%",
        marginTop: "10%",
        padding: "5%",
        borderRadius: 10,
        justifyContent: "center",
    },
    text: {
        marginLeft: "25%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
    },
    text2: {
        fontSize: 30,
        color: "white",
        alignItems: "center",
    },
    button: { marginHorizontal: "30%", marginTop: "10%" },
});

export default Apptime;
