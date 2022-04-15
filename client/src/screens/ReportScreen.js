import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TopBar from "../components/TopBar";
import CompButton from "../components/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "Reason":
      return { ...state, Reason: action.payload };
    default:
      return state;
  }
};

const Report = () => {
  const [state, dispatch] = useReducer(reducer, { Reason: "" });
  return (
    <View>
      <TopBar text="Report User" style={styles.bar} textStyle={styles.text} />
      <View style={styles.container}>
        <Picker
          selectedValue={state.Reason}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            dispatch({ type: "Reason", payload: itemValue })
          }
        >
          <Picker.Item label="--" value="" />
          <Picker.Item label="Spam" value="Spam" />
          <Picker.Item label="Harassment" value="Harassment" />
          <Picker.Item label="Terrorism" value="Terrorism" />
          <Picker.Item label="Hate Speech" value="Hate Speech" />
          <Picker.Item label="Threats" value="Threats" />
        </Picker>
      </View>
      <CompButton text="Report" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: "31%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
  },
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "#324273",
    marginVertical: "10%",
    marginHorizontal: "10%",
    padding: "5%",
    borderRadius: 10,
  },
  button: {
    marginVertical: "5%",
    marginHorizontal: "30%",
  },
});

export default Report;
