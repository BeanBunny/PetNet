import { View } from "react-native";
import { Headline } from "react-native-paper";
import Button from "../../components/Button";

const AfterSignUpScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Headline>Please wait for the admins to verify you.</Headline>
            <Headline>Then You can login to our website.</Headline>
            <Button
                text="Login"
                onChange={() => navigation.navigate("Login")}
            />
        </View>
    );
};

export default AfterSignUpScreen;
