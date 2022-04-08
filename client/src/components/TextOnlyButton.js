import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const TextOnlyButton = ({ style, text, marginLeft, routeName, navigation }) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routeName)}
        style={newstyle(marginLeft)}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

function newstyle(marginLeft) {
  return {
    marginTop: "-9.75%",
    marginLeft: marginLeft,
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
