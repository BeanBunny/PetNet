import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const ButtonWithGivenColour = (props) => {
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={() => {}}>
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
    fontSize: 20,
    alignItems: "center",
    color: "white",
  },
});

export default ButtonWithGivenColour;
