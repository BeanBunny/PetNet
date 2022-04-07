import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Input from "../components/inputbox.js";

const HomeScreen = () => {
  const queryRes = [
    { uri: "https://images.app.goo.gl/ivrBUR8q6T6SuDvT6" },
    { uri: "https://images.app.goo.gl/EPHJMsV1NoXGpxG16" },
    { uri: "https://images.app.goo.gl/9CCMAykjgLqNkNYa9" },
  ];
  const queryRes2 = [
    { uri: "shorturl.at/uEHMZ" },
    { uri: "shorturl.at/fkmvC" },
    { uri: "shorturl.at/kpGLY" },
  ];
  return (
    <View>
      <View style={styles.bar}>
        <TouchableOpacity title="" style={styles.clinics}>
          <Image source={require("../../assets/hamburger.png")} />
        </TouchableOpacity>
        <Text style={styles.header}>Clinics</Text>
      </View>
      <Input
        text="Search"
        text2="Search Clinic"
        style={styles.input}
        secure={false}
      />
      <FlatList
        keyExtractor={(x) => x.uri}
        data={queryRes}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item}</Text>
              {/* <Image style={styles.horiz} source={item} /> */}
            </View>
          );
        }}
      />
      <FlatList
        keyExtractor={(x) => x.uri}
        data={queryRes2}
        renderItem={({ item }) => {
          return (
            <View>
              {/* <Text>{item.uri}</Text> */}
              <Image style={styles.vertic} source={item} />
            </View>
          );
        }}
      />
      <View style={styles.lowbar}>
        <View style={styles.boxleft}>
          <TouchableOpacity title="" style={styles.clinics}>
            <Image source={require("../../assets/clinics.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxright}>
          <TouchableOpacity title="" style={styles.calendar}>
            <Image source={require("../../assets/calendar.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  input: {
    marginTop: "3%",
    marginHorizontal: "8%",
  },
  horiz: {},
  vertic: {},
  header: {
    marginTop: "5%",
    color: "white",
    fontSize: 30,
  },
  clinics: { marginHorizontal: "20%" },
  calendar: { marginHorizontal: "20%" },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
  },
  lowbar: {
    marginTop: "110%",
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
  },
  boxleft: { backgroundColor: "#66C4D2" },
  boxright: { backgroundColor: "#326273" },
});

export default HomeScreen;
