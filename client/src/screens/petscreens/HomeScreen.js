import React from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card } from "react-native-paper";
import TopBar from "../../components/TopBar";
import Search from "../../components/SearchBar";

const HomeScreen = () => {
  const queryRes = [
    {
      name: "haha",
      uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
    },
    {
      name: "haha2",
      uri: "https://images.pexels.com/photos/10364392/pexels-photo-10364392.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      name: "haha3",
      uri: "https://images.pexels.com/photos/11395818/pexels-photo-11395818.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
  ];
  return (
    <Provider>
      <TopBar textStyle={styles.text} style={styles.bar} text="Clinics" />
      <Search style={styles.input} />
      <FlatList
        keyExtractor={(x) => x.uri}
        data={queryRes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Mycard prop={item} />
            </View>
          );
        }}
      />
    </Provider>
  );
};

const Mycard = ({ prop }) => {
  return (
    <View style={styles.list}>
      <TouchableOpacity onPress={() => {}}>
        <Card>
          <Card.Cover source={{ uri: prop.uri }} />
          <Card.Title style={styles.image} title={prop.name} />
          <Card.Actions />
        </Card>
      </TouchableOpacity>
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
  horiz: {
    height: 200,
    width: 300,
  },
  text: {
    marginLeft: "31%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
  },
  image: {
    fontSize: 20,
  },
  list: {
    marginTop: "5%",
    marginHorizontal: "5%",
  },
});

export default HomeScreen;
