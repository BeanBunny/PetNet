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
  const [text_, onChangeText_] = React.useState(null);
  // console.log(text);
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
          {/* <TextInput
            // style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Password"
          /> */}
        </ImageBackground>
        <TextInput
          style={styles.input_phone_number}
          onChangeText={onChangeText}
          value={text}
          mode="outlined"
          label="Phone Number"
          placeholder="Phone Number"
          theme={{
            colors: {
              primary: "green",
              underlineColor: "transparent",
            },
          }}
        />
        <TextInput
          style={styles.input_password}
          onChangeText={onChangeText_}
          value={text_}
          mode="outlined"
          label="Password"
          placeholder="Password"
          theme={{
            colors: {
              primary: "green",
              underlineColor: "transparent",
            },
          }}
        />
        <Button
          // mode="contained"
          // this is where the data that has been entered can be returned to the backend
          onPress={() => console.log(text)}
          style={styles.button_forgot_password}
        >
          <Text> Forgot Password </Text>
        </Button>
        <Button
          mode="contained"
          // this is where the data that has been entered can be returned to the backend
          onPress={() => console.log(text)}
          style={styles.button}
        >
          <Text style={styles.text_button}> Login </Text>
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginLeft: 180,
    marginTop: 3,
    color: "white",
    fontWeight: "bold",
  },
  input_phone_number: {
    height: 60,
    width: 300,
    // margin: 12,
    borderWidth: 3,
    marginLeft: 93,
    // padding: 10,
    padding: 10,
    // color: "#32627F",
    // color: "green",
    borderRadius: 9,
    marginTop: 470,
    position: "absolute",
  },
  button_forgot_password: {
    position: "absolute",
    marginTop: 605,
    marginLeft: 222,
  },
  input_password: {
    height: 60,
    width: 300,
    // margin: 12,
    borderWidth: 3,
    marginLeft: 93,
    // padding: 10,
    padding: 10,
    // color: "#32627F",
    // color: "green",
    borderRadius: 9,
    marginTop: 550,
    position: "absolute",
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
    marginTop: 100,
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
    position: "absolute",
    marginTop: 755,
    marginLeft: 120,
    // marginLeft: 105,
    // marginRight: 100,
    backgroundColor: "#32627F",
    height: "7%",

    width: "50%",
  },
  view_button: {
    alignItems: "center",
    justifyContent: "center",
    // color: "black",
  },
});

export default LoginScreen;
