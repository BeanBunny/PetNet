import React, { useReducer } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import TopBar from "../../components/TopBar";
import CompButton from "../../components/Button";
import Input from "../../components/InputBox";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";

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
    <View style={styles.containerbackground}>
      <LinearGradient
        colors={["#39B1FB", "#5095FD", "#6877FE", "#8556FE"]}
        style={{ flex: 1 }}
      >
        <TopBar text="Add Pet" textStyle={styles.text} style={styles.bar} />
        <Image
          style={styles.img}
          source={require("../../../assets/logoNew.png")}
        />
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
      </LinearGradient>
    </View>
  );
};

AddPetsScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#66C4D2",
  },
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "65%",
    marginLeft: "25%",
    marginTop: "-35%",
  },
  text: {
    marginLeft: "31%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "rgba(67, 105, 219, 0.8)",
    marginTop: "5%",
  },
  input: {
    marginHorizontal: "15%",
    backgroundColor: "white",
    marginVertical: "5%",
  },

  container: {
    backgroundColor: "white",
    marginHorizontal: "5%",
    marginTop: "-30%",
    padding: "5%",
    borderRadius: 10,
    justifyContent: "center",
  },
  addbutton: {
    marginTop: "5%",
    marginLeft: "18%",
    height: "25%",
  },
});

export default AddPetsScreen;
