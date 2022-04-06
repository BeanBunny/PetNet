import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const inputbox = (props) => {
  const [text, setText] = React.useState("");
  return (
    <View style={props.style}>
      <TextInput
        label={props.text}
        value={text}
        mode="outlined"
        secureTextEntry={props.secure}
        placeholder={props.text2}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default inputbox;
