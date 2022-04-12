import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Input from "../../components/InputBox";
import ButtonComp from "../../components/Button";
import { Picker } from "@react-native-picker/picker";
import { Context as AuthContext } from "../../context/AuthContext";

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

  const { state, signupPet } = useContext(AuthContext);
  console.log(state);
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
      />
      <ScrollView style={styles.container}>
        <Input
          label="Name"
          placeholder="Name"
          reducer={[reducerState, dispatch]}
          style={styles.input1}
          secure={false}
        />
        <Input
          label="Number"
          placeholder="03XXXXXXXXX"
          reducer={[reducerState, dispatch]}
          style={styles.input1}
          secure={false}
        />
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
        <Input
          label="Confirm"
          placeholder="Confirm Password"
          reducer={[reducerState, dispatch]}
          style={styles.input2}
          secure={true}
        />
        <Input
          label="City"
          placeholder="Your City"
          reducer={[reducerState, dispatch]}
          style={styles.input2}
          secure={false}
        />
        <Input
          label="Pet"
          placeholder="Pet Name"
          reducer={[reducerState, dispatch]}
          style={styles.input2}
          secure={false}
        />
        <Picker
          selectedValue={reducerState.Type}
          style={styles.input2}
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
      </ScrollView>
      <ButtonComp
        text="Sign Up"
        style={styles.button}
        disabled={false}
        onChange={() =>
          signupPet({
            name: reducerState.Name,
            email: reducerState.Email,
            phone: reducerState.Number,
            password: reducerState.Password,
            pet: { petName: reducerState.Pet, petType: reducerState.Type },
            location: { city: reducerState.City },
            isVet: state.isVet,
          })
        }
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "15%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  input1: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  input2: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  input3: {
    marginHorizontal: "15%",
    marginVertical: "5%",
    borderWidth: 5,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "63%",
    marginTop: "5%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "5%",
    marginHorizontal: "15%",
  },
});

export default SignUpScreen;
