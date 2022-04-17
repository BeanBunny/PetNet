import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Headline } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Input from "../../components/InputBox";
import ButtonComp from "../../components/Button";
import ErrorTextComponent from "../../components/ErrorTextComponent";
import { Context as AuthContext } from "../../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import {
  errorEmail,
  errorNumber,
  errorRequired,
  errorName,
  errorEqual,
} from "../../inputvalidation/validators";

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Email":
      return { ...state, Email: action.payload };
    case "Number":
      return { ...state, Number: action.payload };
    case "Password":
      return { ...state, Password: action.payload };
    case "Confirm":
      return { ...state, Confirm: action.payload };
    case "Pet":
      return { ...state, Pet: action.payload };
    case "Type":
      return { ...state, Type: action.payload };
    case "City":
      return { ...state, City: action.payload };
    default:
      return state;
  }
};

// name, phone number, email, password, confirm password
const SignUpScreen = ({ navigation }) => {
  const [reducerState, dispatch] = useReducer(reducer, {
    Name: "",
    Email: "",
    Number: "",
    Password: "",
    Confirm: "",
    Pet: "",
    Type: "",
    City: "",
  });

  const errorMsgName = errorName(reducerState.Name);
  const errorMsgEmail = errorEmail(reducerState.Email);
  const errorMsgNumber = errorNumber(reducerState.Number);
  const errorMsgPassword = errorRequired(reducerState.Password, "Password");
  const errorMsgConfirmPassword = errorRequired(
    reducerState.Confirm,
    "Confirm Password"
  );
  const errorMsgEqualPassword = errorEqual(
    reducerState.Password,
    reducerState.Confirm
  );
  const errorMsgPetName = errorRequired(reducerState.Pet, "First Pet's Name");
  const errorMsgPetType = errorRequired(reducerState.Type, "First Pet's Type");
  const errorMsgCity = errorRequired(reducerState.City, "Your City");

  const { state, signupPet, clearErrorMessage } = useContext(AuthContext);

  navigation.addListener("focus", clearErrorMessage);
  return (
    <View style={styles.containerbackground}>
      <LinearGradient
        colors={["#39B1FB", "#5095FD", "#6877FE", "#8556FE"]}
        style={{ flex: 1 }}
      >
        <Headline
          style={{
            marginLeft: "30%",
            marginTop: "10%",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Pet Owner Sign Up
        </Headline>
        {/* <Image
                style={styles.img}
                source={require("../../../assets/Logo1.jpeg")}
            /> */}
        <View style={styles.container}>
          <Input
            label="Name"
            placeholder="Full Name"
            reducer={[reducerState, dispatch]}
            style={styles.input1}
            secure={false}
          />
          {/* {errorMsgName != null ? (
                    <ErrorTextComponent error={errorMsgName} />
                ) : null} */}
          <Input
            label="Number"
            placeholder="03XXXXXXXXX"
            reducer={[reducerState, dispatch]}
            style={styles.input}
            secure={false}
          />
          {/* {errorMsgNumber != null ? (
                    <ErrorTextComponent error={errorMsgNumber} />
                ) : null} */}
          <Input
            label="Email"
            placeholder="example@gmail.com"
            reducer={[reducerState, dispatch]}
            style={styles.input}
            secure={false}
          />
          {/* {errorMsgEmail != null ? (
                    <ErrorTextComponent error={errorMsgEmail} />
                ) : null} */}

          <Input
            label="Password"
            placeholder="Password"
            reducer={[reducerState, dispatch]}
            style={styles.input}
            secure={true}
          />
          {/* {errorMsgPassword != null ? (
                    <ErrorTextComponent error={errorMsgPassword} />
                ) : null} */}
          <Input
            label="Confirm"
            placeholder="Confirm Password"
            reducer={[reducerState, dispatch]}
            style={styles.input}
            secure={true}
          />
          {/* {errorMsgConfirmPassword != null ? (
                    <ErrorTextComponent error={errorMsgConfirmPassword} />
                ) : null}
                {errorMsgEqualPassword != null ? (
                    <ErrorTextComponent error={errorMsgEqualPassword} />
                ) : null} */}
          <Picker
            selectedValue={reducerState.City}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              dispatch({ type: "City", payload: itemValue })
            }
          >
            <Picker.Item label="City" value="" />
            <Picker.Item label="Lahore" value="Lahore" />
            <Picker.Item label="Karachi" value="Karachi" />
            <Picker.Item label="Islamabad" value="Islamabad" />
          </Picker>
          {/* {errorMsgCity != null ? (
                    <ErrorTextComponent error={errorMsgCity} />
                ) : null} */}
          <Input
            label="Pet"
            placeholder="Pet Name"
            reducer={[reducerState, dispatch]}
            style={styles.input}
            secure={false}
          />
          {/* {errorMsgPetName != null ? (
                    <ErrorTextComponent error={errorMsgPetName} />
                ) : null} */}
          <Picker
            selectedValue={reducerState.Type}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              dispatch({ type: "Type", payload: itemValue })
            }
          >
            <Picker.Item label="Pet type" value="" />
            <Picker.Item label="Cat" value="Cat" />
            <Picker.Item label="Dog" value="Dog" />
            <Picker.Item label="Bird" value="Bird" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
          {/* {errorMsgPetType != null ? (
                    <ErrorTextComponent error={errorMsgPetType} />
                ) : null} */}
          {state.errorMessage ? (
            <ErrorTextComponent error={state.errorMessage} />
          ) : null}

          {errorMsgName ? (
            <ErrorTextComponent error={errorMsgName} />
          ) : errorMsgNumber ? (
            <ErrorTextComponent error={errorMsgNumber} />
          ) : errorMsgEmail ? (
            <ErrorTextComponent error={errorMsgEmail} />
          ) : errorMsgPassword ? (
            <ErrorTextComponent error={errorMsgPassword} />
          ) : errorMsgConfirmPassword ? (
            <ErrorTextComponent error={errorMsgConfirmPassword} />
          ) : errorMsgEqualPassword ? (
            <ErrorTextComponent error={errorMsgEqualPassword} />
          ) : errorMsgCity ? (
            <ErrorTextComponent error={errorMsgCity} />
          ) : errorMsgPetName ? (
            <ErrorTextComponent error={errorMsgPetName} />
          ) : errorMsgPetType ? (
            <ErrorTextComponent error={errorMsgPetType} />
          ) : null}
        </View>
        {errorMsgEmail ||
        errorMsgPassword ||
        errorMsgCity ||
        errorMsgConfirmPassword ||
        errorMsgEqualPassword ||
        errorMsgName ||
        errorMsgNumber ||
        errorMsgPassword ||
        errorMsgPetName ||
        errorMsgPetType ? (
          <ButtonComp text="Login" style={styles.button} disabled />
        ) : (
          <ButtonComp
            text="Login"
            style={styles.button}
            disabled={false}
            onChange={() =>
              signupPet({
                name: reducerState.Name,
                email: reducerState.Email,
                phone: reducerState.Number,
                password: reducerState.Password,
                pet: {
                  petName: reducerState.Pet,
                  petType: reducerState.Type,
                },
                location: reducerState.City,
                isVet: state.isVet,
              })
            }
          />
        )}
      </LinearGradient>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
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
    height: "15%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  input: {
    marginHorizontal: "15%",
    marginTop: "5%",
  },
  input1: {
    marginHorizontal: "15%",
    marginTop: "8%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "75%",
    marginTop: "5%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "5%",
    marginLeft: "18%",
    height: "25%",
  },
});

export default SignUpScreen;
