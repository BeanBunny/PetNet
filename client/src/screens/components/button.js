import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const button = (props) => {
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#326273",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "white",
  },
});

export default button;
