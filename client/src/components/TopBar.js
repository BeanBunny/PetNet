import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Appbar } from "react-native-paper";

const topbar = (props) => {
  return (
    <Appbar style={props.style}>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title={props.text} style={props.textStyle} />
    </Appbar>
  );
};

const styles = StyleSheet.create({});

export default topbar;
