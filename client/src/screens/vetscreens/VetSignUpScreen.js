import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Input from "../../components/Button";
import ButtonComp from "../../components/Button";
import { Context as AuthContext } from "../../context/AuthContext";
import { Picker } from "@react-native-picker/picker";

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "PVMC":
      return { ...state, PVMC: action.payload };
    case "Gender":
      return { ...state, Gender: action.payload };
    case "Father":
      return { ...state, Father: action.payload };
    default:
      return state;
  }
};

const VetSignUpScreen = ({ navigation }) => {
  const [reducerState, dispatch] = useReducer(reducer, {
    Name: "",
    PVMC: "",
    Gender: "",
    Father: "",
  });
  const { state, signupVet } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
      />
      <ScrollView style={styles.container}>
        <Input
          label="Name"
          placeholder="Full Name"
          reducer={[reducerState, dispatch]}
          style={styles.input}
          secure={false}
        />
        <Input
          label="PVMC"
          placeholder="PVMC Registration Number"
          reducer={[reducerState, dispatch]}
          style={styles.input}
          secure={false}
        />
        <Picker
          selectedValue={reducerState.Gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            dispatch({ type: "Gender", payload: itemValue })
          }
        >
          <Picker.Item label="--" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        <Input
          label="Name"
          placeholder="Father's Name"
          reducer={[reducerState, dispatch]}
          style={styles.input}
          secure={false}
        />
      </ScrollView>
      <ButtonComp
        text="Continue"
        style={styles.button}
        disabled={false}
        onChange={() =>
          signupVet({
            name: reducerState.Name,
            PVMC: reducerState.PVMC,
            gender: reducerState.Gender,
            father: reducerState.Father,
            isVet: state.isVet,
          })
        }
      />
    </View>
  );
};

VetSignUpScreen.navigationOptions = () => {
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
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
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

export default VetSignUpScreen;
