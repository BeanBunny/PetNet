import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "../../components/TopBar";
import CompButton from "../../components/Button";
import Input from "../../components/InputBox";
import { Picker } from "@react-native-picker/picker";

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Type":
      return { ...state, Type: action.payload };
    default:
      return state;
  }
};

const AddPetsScreen = () => {
  const [state, dispatch] = useReducer(reducer, { Name: "", Type: "" });
  return (
    <View>
      <TopBar text="Add Pet" textStyle={styles.text} style={styles.bar} />
      <View style={styles.container}>
        <Input
          label="Name"
          placeholder="Pet Name"
          reducer={[state, dispatch]}
          style={styles.input}
          secure={false}
        />
        <Picker
          selectedValue={state.Type}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            dispatch({ type: "Type", payload: itemValue })
          }
        >
          <Picker.Item label="--" value="" />
          <Picker.Item label="Cat" value="Cat" />
          <Picker.Item label="Dog" value="Dog" />
          <Picker.Item label="Bird" value="Bird" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <CompButton text="Add Pet" style={styles.addbutton} />
    </View>
  );
};

AddPetsScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  text: {
    marginLeft: "25%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
  },
  input: {
    marginHorizontal: "15%",
    backgroundColor: "white",
    marginVertical: "5%",
  },

  container: {
    backgroundColor: "#326273",
    marginHorizontal: "5%",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 10,
    justifyContent: "center",
  },
  addbutton: {
    marginTop: "5%",
    marginHorizontal: "30%",
  },
});

export default AddPetsScreen;
