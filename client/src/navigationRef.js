import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export default (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
    <Text>Hello</Text>;
  }
};
