import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const MyComponent = (props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={props.style}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyComponent;
