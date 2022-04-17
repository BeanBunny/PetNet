import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";
import { LinearGradient } from "expo-linear-gradient";

const reducer = (state, action) => {
  switch (action.type) {
    case "Email":
      return { ...state, Email: action.payload };
    default:
      return state;
  }
};

const ForgotPassword = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { Email: "" });
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
            label="Email"
            placeholder="example@gmail.com"
            reducer={[state, dispatch]}
            style={styles.input}
            secure={false}
          />
        </View>
        <AlertButton
          style={styles.button}
          navigation={navigation}
          text="Send OTP"
          route="EnterOTP"
          alertText1="An OTP has been generated."
          alertText2="Access it on your Email"
          alertText3="Enter OTP"
        />
      </LinearGradient>
    </View>
  );
};

ForgotPassword.navigationOptions = () => {
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
    height: "35%",
    marginLeft: "26%",
    marginTop: "25%",
  },
  input: {
    marginHorizontal: "15%",
    marginTop: "7%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "13%",
    marginTop: "5%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "6%",
    marginLeft: "18%",
    height: "30%",
  },
});

export default ForgotPassword;
