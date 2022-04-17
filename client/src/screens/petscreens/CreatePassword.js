import React, { useReducer } from "react";
import { View, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";
import { LinearGradient } from "expo-linear-gradient";

const reducer = (state, action) => {
  switch (action.type) {
    case "New":
      return { ...state, New: action.payload };
    case "Confirm":
      return { ...state, Confirm: action.payload };
    default:
      return state;
  }
};

const CreatePassword = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { New: "", Confirm: "" });
  return (
    <View style={styles.containerbackground}>
      <LinearGradient
        colors={["#39B1FB", "#5095FD", "#6877FE", "#8556FE"]}
        style={{ flex: 1 }}
      >
        <Image
          style={styles.img}
          source={require("../../../assets/logoNew.png")}
        />
        <View style={styles.container}>
          <Input
            label="New"
            placeholder="New Password"
            reducer={[state, dispatch]}
            style={styles.input1}
            secure={true}
          />
          <Input
            label="Confirm"
            placeholder="Confirm Password"
            reducer={[state, dispatch]}
            style={styles.input}
            secure={true}
          />
        </View>
        <AlertButton
          style={styles.button}
          navigation={navigation}
          text="Confirm"
          route="Login"
          alertText1="Your new password has been created."
          alertText2="Login with your new password to continue."
          alertText3="Login!"
        />
      </LinearGradient>
    </View>
  );
};

CreatePassword.navigationOptions = () => {
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
    height: "30%",
    marginLeft: "26%",
    marginTop: "26%",
  },
  input1: {
    marginHorizontal: "15%",
    marginTop: "12%",
  },
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "26%",
    marginTop: "4%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "5%",
    marginLeft: "18%",
    height: "28%",
  },
});

export default CreatePassword;
