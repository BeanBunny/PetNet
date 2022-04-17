import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SquareButton = ({
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
    // backgroundColor: "#FF038E",
    backgroundColor: "#00000070",
    color: "#FFFFFF",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    height: "50%",
    width: "50%",
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

export default SquareButton;
