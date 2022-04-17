import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/InputBox";
import ButtonComp from "../components/Button";
import Textbutton from "../components/TextOnlyButton";
import { Context as AuthContext } from "../context/AuthContext";
import { errorEmail, errorRequired } from "../inputvalidation/validators";
import ErrorTextComponent from "../components/ErrorTextComponent";
import { LinearGradient } from "expo-linear-gradient";

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
  const [reducerState, dispatch] = useReducer(reducer, {
    Email: "",
    Password: "",
  });
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  const errorMessageEmail = errorEmail(reducerState.Email);
  // const errorMessagePassword = errorPassword(reducerState.Password);
  const errorMessagePassword = errorRequired(reducerState.Password, "Password");
  // CHECK THIS AFTER SIGN UPPP
  navigation.addListener("focus", clearErrorMessage);

  return (
    <View style={styles.containerbackground}>
      <LinearGradient
        colors={["#39B1FB", "#5095FD", "#6877FE", "#8556FE"]}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 0.3, marginLeft: "-15%" }}>
          <Image
            style={styles.img}
            source={require("../../assets/logoNew.png")}
          />
        </View>
        <View style={styles.container}>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            reducer={[reducerState, dispatch]}
            style={styles.input1}
            secure={false}
          />
          <Input
            label="Password"
            placeholder="Password"
            reducer={[reducerState, dispatch]}
            style={styles.input2}
            secure={true}
          />
          <View style={styles.forgor}>
            <Textbutton
              text="Forgot Password?"
              navigation={navigation}
              marginLeft="38%"
              routeName="ForgotPassword"
              textStyle={{ fontSize: 14, color: "blue" }}
            />
          </View>
          {/* <View> */}
          {errorMessageEmail ? (
            <ErrorTextComponent error={errorMessageEmail} />
          ) : errorMessagePassword ? (
            <ErrorTextComponent error={errorMessagePassword} />
          ) : null}
          {/* </View> */}

          {state.errorMessage ? (
            <ErrorTextComponent error={state.errorMessage} />
          ) : null}
        </View>
        <View style={{ flex: 0.3 }}>
          {errorMessageEmail || errorMessagePassword ? (
            <ButtonComp text="Login" style={styles.button} disabled />
          ) : (
            <ButtonComp
              text="Login"
              style={styles.button}
              routeName = ""
              disabled={false}
              onChange={() =>
                signin({
                  email: reducerState.Email,
                  password: reducerState.Password,
                  isVet: state.isVet,
                })
              }
            />
          )}
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text style={{ fontSize: 16 }}>Don't have an account?</Text> */}
          <Textbutton
            text="Sign Up"
            navigation={navigation}
            marginLeft="29%"
            routeName="SignUp"
            textStyle={{ fontSize: 18, color: "white", fontWeight: "bold" }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

LoginScreen.navigationOptions = () => {
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
    height: "80%",
    marginLeft: "27%",
    //justifyContent: "center",
    marginTop: "17%",
  },
  input1: {
    marginHorizontal: "15%",
    marginTop: "15%",
  },
  input2: {
    marginHorizontal: "15%",
    marginTop: "5%",
  },
  container: {
    flex: 0.4,
    backgroundColor: "white",
    borderRadius: 10,
    // height: "30%",
    marginTop: "23%",
    marginHorizontal: "10%",
  },
  forgor: {
    color: "blue",
    marginTop: "6%",
  },
  button: {
    marginTop: "10%",
    marginLeft: "20%",
    height: "99%",
    width: "70%",
    // alignSelf: "center",
  },
});

export default LoginScreen;
