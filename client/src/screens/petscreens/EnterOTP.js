import React, { useReducer } from "react";
import { View, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";
import { LinearGradient } from "expo-linear-gradient";

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
            label="OTP"
            placeholder="123xy"
            reducer={[state, dispatch]}
            style={styles.input}
            secure={false}
          />
        </View>
        <AlertButton
          style={styles.button}
          navigation={navigation}
          text="Submit"
          route="CreatePassword"
          alert1="OTP Successfully Entered!"
          alert3="Enter New Password"
        />
      </LinearGradient>
    </View>
  );
};

EnterOTP.navigationOptions = () => {
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
    height: "50%",
    marginHorizontal: "25%",
    marginTop: "15%",
  },
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "13%",
    marginTop: "-15%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "7%",
    marginLeft: "18%",
    height: "29%",
  },
});

export default EnterOTP;
