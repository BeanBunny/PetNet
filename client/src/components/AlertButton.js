import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { withNavigation } from "react-navigation";

const AlertButton = ({ style, text, navigation, alertText1, alertText2 }) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => {
          showAlert(alertText1, alertText2, navigation);
        }}
        style={styles.container}
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
  textStyle: {
    fontSize: 30,
    color: "white",
  },
});

const showAlert = (alertText1, alertText2, navigation) =>
  Alert.alert(alertText1, alertText2, [
    {
      text: "Account Created! Login to Start",
      onPress: () => {
        navigation.navigate("Login");
      },
    },
  ]);

export default withNavigation(AlertButton);
