import { View, Text } from "react-native";

const ErrorTextComponent = ({ error }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ color: "red" }}>{error}</Text>
        </View>
    );
};

export default ErrorTextComponent;
