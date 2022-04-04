import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

const LoginScreen = (props) => {
  const [text, onChangeText] = React.useState(null);
  return (
    <PaperProvider>
      <View>
        {/* <Text style={styles.text}>"Hello"</Text> */}
        <Image
          style={styles.image_resize}
          source={require("../../assets/now.jpg")}
        />
        <Text style={styles.text}> PetNet </Text>
        <ImageBackground
          resizeMode="contain"
          style={styles.image_login}
          source={require("../../assets/login.jpg")}
        >
          <Text>Hellp</Text>
          <TextInput
            // style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Phone Number"
          />
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Password"
          />
          <Button
            mode="contained"
            onPress={() => console.log(value)}
            style={styles.button}
          ></Button> */}
        </ImageBackground>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginLeft: 180,
    marginTop: 8,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#32627F",
  },
  or_text: {
    fontSize: 30,
    marginLeft: -10,
    marginTop: 40,
    color: "white",
    fontWeight: "bold",
  },
  text_button: {
    fontSize: 20,
    marginLeft: 50,
    marginTop: 7,
    color: "white",
    fontWeight: "bold",
  },
  image_resize: {
    // flex: 1,
    // width: 200,
    marginTop: 30,
    height: 200,
    resizeMode: "contain",
    paddingLeft: 480,
    // alignItems: "center",
    // paddingTop: 200,
  },
  image_login: {
    // flex: 1,
    // width: 200,
    marginTop: 50,
    height: 400,
    resizeMode: "contain",
    paddingLeft: 480,
    // alignItems: "center",
    // paddingTop: 200,
  },
  button: {
    // the actual contents of the button
    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: 25,
    // paddingHorizontal: 0,
    // borderRadius: 20,
    // elevation: 100,
    marginTop: 50,
    // marginLeft: 105,
    // marginRight: 100,
    backgroundColor: "#32627F",
    height: "13%",

    width: "70%",
  },
  view_button: {
    alignItems: "center",
    justifyContent: "center",
    // color: "black",
  },
});

export default LoginScreen;
