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
const SignUpScreen = (props) => {
  const [name, onChangeText] = React.useState(null);
  const [phone_number, onChangeText_] = React.useState(null);
  const [email, onChangeText_1] = React.useState(null);
  const [password, onChangeText_2] = React.useState(null);
  const [confirm_password, onChangeText_3] = React.useState(null);
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
        ></ImageBackground>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={name}
          mode="outlined"
          label="Name"
          placeholder="Name"
          theme={{
            colors: {
              primary: "green",
              underlineColor: "transparent",
            },
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText_}
          value={phone_number}
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
          style={styles.input}
          onChangeText={onChangeText_1}
          value={email}
          mode="outlined"
          label="Email"
          placeholder="Email"
          theme={{
            colors: {
              primary: "green",
              underlineColor: "transparent",
            },
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText_2}
          value={password}
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
          mode="contained"
          // this is where the data that has been entered can be returned to the backend
          onPress={() => console.log(text)}
          style={styles.button}
        ></Button>
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
    height: 60,
    width: 300,
    // margin: 12,
    borderWidth: 3,
    marginLeft: 90,
    // padding: 10,
    padding: 10,
    // color: "#32627F",
    // color: "green",
    borderRadius: 9,
    marginTop: 10,
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

export default SignUpScreen;
