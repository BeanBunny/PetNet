import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TopBar from "../../components/TopBar";

const addserv = () => {
  return (
    <View>
      <TopBar style={styles.text} text="Add Service" textStyle={styles.bar} />
      <View></View>
    </View>
  );
};

addserv.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  text: {
    marginLeft: "31%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
  },
});

export default addserv;
