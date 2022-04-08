import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Drawer } from "react-native-paper";

const hamburger = () => {
  const [active, setActive] = React.useState("");
  return (
    <View>
      <Drawer.Section title="My Profile">
        <Drawer.Item
          label="My Profile"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({});

export default hamburger;
