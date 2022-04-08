import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { withNavigation } from "react-navigation";

const AlertButton = ({
  style,
  text,
  navigation,
  alert1,
  alert2,
  alert3,
  route,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => {
          showAlert(alert1, alert2, alert3, navigation, route);
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

const showAlert = (alert1, alert2, alert3, navigation, route) =>
  Alert.alert(alert1, alert2, [
    {
      text: alert3,
      onPress: () => {
        navigation.navigate(route);
      },
    },
  ]);

export default withNavigation(AlertButton);
