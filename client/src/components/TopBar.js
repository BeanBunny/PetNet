import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Appbar } from "react-native-paper";

const topbar = (props) => {
  return (
    <Appbar style={props.style}>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Text style={props.textStyle}>{props.text}</Text>
    </Appbar>
  );
};

const styles = StyleSheet.create({});

export default topbar;
