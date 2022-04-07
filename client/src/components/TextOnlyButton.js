import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const TextOnlyButton = ({
  style,
  text,
  margin_left,
  routeName,
  navigation,
}) => {
  console.log(routeName);
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routeName)}
        style={newstyle(margin_left)}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

function newstyle(margin_left) {
  return {
    marginTop: "-9.75%",
    marginLeft: margin_left,
    padding: "5%",
    alignItems: "center",
  };
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: "blue",
  },
});

export default withNavigation(TextOnlyButton);
