import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import ButtomComp from "../../components/Button";
import Textbutton from "../../components/TextOnlyButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "Email":
      return { ...state, Email: action.payload };
    case "Password":
      return { ...state, Password: action.payload };
    default:
      return state;
  }
};

const LoginScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { Email: "", Password: "" });
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
      />
      <View style={styles.container}>
        <Input
          label="Email"
          placeholder="example@gmail.com"
          reducer={[state, dispatch]}
          style={styles.input1}
          secure={false}
        />
        <Input
          label="Password"
          placeholder="Password"
          reducer={[state, dispatch]}
          style={styles.input2}
          secure={true}
        />
        <Textbutton
          text="Forgot Password?"
          navigation={navigation}
          marginLeft="38%"
          routeName="ForgotPassword"
        />
      </View>
      <ButtomComp text="Login" style={styles.button} />
      <View>
        <Text style={{ marginLeft: "24%", fontSize: 16, marginTop: "3%" }}>
          Don't have an account?
        </Text>
        <Textbutton
          text="Sign Up"
          navigation={navigation}
          marginLeft="29%"
          routeName="SignUp"
        />
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = () => {
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
    marginTop: "15%",
  },
  input1: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  input2: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "30%",
    // width: "100%",
    marginTop: "20%",
    marginHorizontal: "10%",
  },
  forgor: {
    color: "blue",
    marginLeft: "60%",
  },
  button: {
    marginTop: "5%",
    marginHorizontal: "15%",
  },
});

export default LoginScreen;
