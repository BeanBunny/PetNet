import React from "react";
import { View, StyleSheet } from "react-native";

const AuthForm = ({ children }) => {
  return <View style={styles.form}>{children}</View>;
};

const styles = StyleSheet.create({
  form: {
    height: "50%",
    width: "80%",
    backgroundColor: "#ffffff",
    marginLeft: "8%",
  },
});

export default AuthForm;
