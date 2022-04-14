import React, { useReducer } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TopBar from "../../components/TopBar";
import Input from "../../components/InputBox";
import CompButton from "../../components/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Description":
      return { ...state, Description: action.payload };
    case "Cost":
      return { ...state, Cost: action.payload };
    default:
      return state;
  }
};

const Addserv = () => {
  const [state, dispatch] = useReducer(reducer, {
    Name: "",
    Description: "",
    Cost: "",
  });
  return (
    <View>
      <TopBar style={styles.bar} text="Add Service" textStyle={styles.text} />
      <View style={styles.container}>
        <Input
          label="Name"
          placeholder="Name"
          reducer={[state, dispatch]}
          style={styles.input}
          secure={false}
        />
        <Input
          label="Description"
          placeholder="Description"
          reducer={[state, dispatch]}
          style={styles.input}
          secure={false}
        />
        <Input
          label="Cost"
          placeholder="Cost"
          reducer={[state, dispatch]}
          style={styles.input}
          secure={false}
        />
      </View>
      <CompButton text="Add" style={styles.addbutton} />
    </View>
  );
};

Addserv.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  text: {
    marginLeft: "25%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
  },
  input: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "#326273",
    marginHorizontal: "5%",
    marginTop: "10%",
    padding: "5%",
    borderRadius: 10,
    justifyContent: "center",
  },
  addbutton: {
    marginTop: "5%",
    marginHorizontal: "30%",
  },
});

export default Addserv;
