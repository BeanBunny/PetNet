import React, { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import CompButton from "../../components/Button";
import Input from "../../components/InputBox";
import TopBar from "../../components/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import SolButton from "../../components/solidbutton";

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Number":
      return { ...state, Number: action.payload };
    case "Email":
      return { ...state, Email: action.payload };
    default:
      return state;
  }
};

const Editprofile = () => {
  const [state, dispatch] = useReducer(reducer, {
    Name: "",
    Email: "",
    Number: "",
  });
  return (
    <View style={styles.containerbackground}>
      <LinearGradient
        colors={["#39B1FB", "#5095FD", "#6877FE", "#8556FE"]}
        style={{ flex: 1 }}
      >
        <TopBar
          text="Edit Profile"
          textStyle={styles.text}
          style={styles.bar}
        />
        <View style={styles.container}>
          <Input
            label="Name"
            placeholder="Name"
            reducer={[state, dispatch]}
            style={styles.input}
            secure={false}
          />
          <Input
            label="Number"
            placeholder="03XX-XXXX-XXX"
            reducer={[state, dispatch]}
            style={styles.input}
            secure={false}
          />
          <Input
            label="Email"
            placeholder="example@gmail.com"
            reducer={[state, dispatch]}
            style={styles.input}
            secure={false}
          />

          <SolButton text="My Pets" style={styles.button1} />
          <SolButton text="Change Password" style={styles.button2} />
        </View>
        <CompButton text="Save" style={styles.button3} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#66C4D2",
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
  container: {
    backgroundColor: "white",
    marginVertical: "10%",
    marginHorizontal: "10%",
    padding: "5%",
    height: "55%",
    borderRadius: 10,
  },
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  button1: {
    marginHorizontal: "20%",
    marginTop: "5%",
    marginLeft: "23%",
    width: "65%",
    height: "36%",
  },
  button2: {
    marginHorizontal: "20%",
    marginTop: "-30%",
    marginLeft: "23%",
    width: "65%",
    height: "50%",
  },
  button3: {
    marginHorizontal: "20%",
    marginTop: "1%",
    marginTop: "-2%",
    marginLeft: "30%",
    height: "20%",
  },
});

export default Editprofile;
