import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const LoginScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}> LOGIN SCREEN </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    // marginLeft: 138,
    // marginTop: 8,
    color: "white",
    fontFamily: "Hoefler Text",
    fontWeight: "bold",
  },
});

export default LoginScreen;
