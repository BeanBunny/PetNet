import { Text } from "react-native";

const TestScreen = ({ route, navigation }) => {
    return <Text>{JSON.stringify(route.params)}</Text>;
};

export default TestScreen;
