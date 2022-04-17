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
    // backgroundColor: "rgba(108, 20, 153, 0.55)",
    backgroundColor: "#8556FE",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    height: "30%",
    width: "100%",
    // marginLeft: "35%",
  },
  disabledContainer: {
    backgroundColor: "#d3d9dc",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    width: "83%",
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default button;
