import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ServicesButton = (props) => {
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
    fontSize: 25,
    color: "white",
  },
});

export default ServicesButton;
