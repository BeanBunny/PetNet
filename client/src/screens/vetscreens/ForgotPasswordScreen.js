import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../AlertButton/components/InputBox";
import AlertButton from "../../components/AlertButton";

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
    <View>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
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
        alert1="An OTP has been generated."
        alert2="Access it on your Email or Phone Number."
        alert3="Enter OTP"
      />
    </View>
  );
};

ForgotPassword.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "30%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "30%",
    marginTop: "20%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "5%",
    marginHorizontal: "15%",
  },
});

export default ForgotPassword;
