import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const button = ({
  style,
  text,
  navigation,
  routeName,
  onChange,
  bool,
  disabled,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={onChange}
        style={disabled ? styles.disabledContainer : styles.container}
        disabled={disabled}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(108, 20, 153, 0.55)",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    height: "30%",
    width: "80%",
    // marginLeft: "35%",
  },
  disabledContainer: {
    backgroundColor: "#d3d9dc",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default button;
