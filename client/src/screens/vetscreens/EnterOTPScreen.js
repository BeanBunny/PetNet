import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "OTP":
      return { ...state, OTP: action.payload };
    default:
      return state;
  }
};

const EnterOTP = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { OTP: "" });
  return (
    <View>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
      />
      <View style={styles.container}>
        <Input
          label="OTP"
          placeholder="123xy"
          reducer={[state, dispatch]}
          style={styles.input}
          secure={false}
        />
      </View>
      <AlertButton
        style={styles.button}
        text="Submit"
        route="CreatePassword"
        alert1="OTP Successfully Entered!"
        alert3="Enter New Password"
        navigation={navigation}
      />
    </View>
  );
};

EnterOTP.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "50%",
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
    height: "13%",
    marginTop: "20%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "5%",
    marginHorizontal: "15%",
  },
});

export default EnterOTP;
