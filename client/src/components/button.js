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
    backgroundColor: "#326273",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
  },
  disabledContainer: {
    backgroundColor: "#d3d9dc",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 15,
    color: "white",
  },
});

export default button;
