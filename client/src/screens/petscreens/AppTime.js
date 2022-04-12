import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TopBar from "../../components/TopBar";
import Button from "../../components/Button";

const Apptime = () => {
  const [state, setTime] = useState("");
  const [petstate, setPet] = useState("");
  const list1 = ["3:00 PM", "8:00 AM"];
  const list2 = ["Betsie", "Doggie"];
  const mapper = (list) => {
    list.map((val) => <Picker.Item label={val} value={val} />);
  };
  return (
    <View>
      <TopBar textStyle={styles.text} text="Set Time Slot" style={styles.bar} />
      <View style={styles.container}>
        <Text style={styles.text2}>Pick a Time</Text>
        <View style={styles.input}>
          <Picker
            selectedValue={state}
            style={{ color: "black" }}
            onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
          >
            <Picker.Item label="3:00 PM" value="3:00 PM" />
            <Picker.Item label="8:00 PM" value="8:00 PM" />
            {/* {mapper(list1)}; {mapper(list2)}; */}
          </Picker>
        </View>
        <Text style={styles.text2}>Pick a Pet</Text>
        <View style={styles.input}>
          <Picker
            selectedValue={petstate}
            style={{ color: "black" }}
            onValueChange={(itemValue, itemIndex) => setPet(itemValue)}
          >
            <Picker.Item label="doggie" value="doggie" />
            <Picker.Item label="catto" value="catto" />
            {/* mapper(list1); mapper(list2); */}
          </Picker>
        </View>
      </View>
      <Button style={styles.button} text="Confirm" />
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
