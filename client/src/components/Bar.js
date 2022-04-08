import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";

const routesObj = [
  {
    key: "clinics",
    title: "Clinics",
    icon: "hospital-box",
    color: "#66C4D2",
  },
  {
    key: "calendar",
    title: "Calendar",
    icon: "calendar",
    color: "#326273",
  },
];

const bar = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(routesObj);
  const renderScene = BottomNavigation.SceneMap({
    clinics: () => <Text>Clinics</Text>,
    calendar: () => <Text>Calendar</Text>,
  });
  return (
    <View style={props.style}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default bar;
