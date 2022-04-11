import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

const AlertButton = ({
  style,
  text,
  navigation,
  alertText1,
  alertText2,
  alertText3,
  route,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => {
          showAlert(alertText1, alertText2, alertText3, navigation, route);
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

const showAlert = (alertText1, alertText2, alertText3, navigation, route) =>
  Alert.alert(alertText1, alertText2, [
    {
      text: alertText3,
      onPress: () => {
        navigation.navigate(route);
      },
    },
  ]);

export default AlertButton;
