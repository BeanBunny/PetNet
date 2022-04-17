import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonComp from "../components/Button";
import { Context as AuthContext } from "../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import SqButton from "../components/SquareButton";

const StartScreen = ({ navigation }) => {
  const { _, isPetOrVet } = useContext(AuthContext);
  return (
    <View style={styles.containerbackground}>
      <LinearGradient
        colors={["#39B1FB", "#5095FD", "#6877FE", "#8556FE"]}
        style={{ flex: 1 }}
      >
        <Image
          style={styles.img}
          source={require("../../assets/logoNew.png")}
        />
        <SqButton
          text="Pet Owner"
          routeName="Login"
          style={styles.button1}
          navigation={navigation}
          onChange={() => isPetOrVet(false)}
        />
        {/* <View style={styles.line}></View> */}
        <SqButton
          text="Vet Clinic"
          routeName="Login"
          style={styles.button2}
          navigation={navigation}
          onChange={() => isPetOrVet(true)}
        />
      </LinearGradient>
    </View>
  );
};

StartScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#66C4D2",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  img: {
    resizeMode: "contain",
    height: "30%",
    justifyContent: "center",
    marginLeft: "25%",
    marginTop: "24%",
  },
  button1: {
    marginHorizontal: "20%",
    marginTop: "20%",
    marginBottom: "5%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 5,
    marginHorizontal: "5%",
    marginVertical: "10%",
  },
  button2: {
    // marginHorizontal: "20%",
    marginTop: "-90%",
    marginLeft: "50%",
  },
});

export default StartScreen;
