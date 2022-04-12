import React from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card } from "react-native-paper";
import Bar from "../../components/Bar";
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
  // const queryRes2 = [
  //   { uri: "shorturl.at/uEHMZ" },
  //   { uri: "shorturl.at/fkmvC" },
  //   { uri: "shorturl.at/kpGLY" },
  // ];
  return (
    <Provider>
      <TopBar textStyle={styles.text} style={styles.bar} text="Clinics" />
      <Search style={styles.input} />
      {/* <FlatList
        keyExtractor={(x) => x.uri}
        data={queryRes}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Image style={styles.horiz} source={item} />}
      /> */}
      <FlatList
        keyExtractor={(x) => x.uri}
        data={queryRes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              {/* <Text>{item.uri}</Text> */}
              {/* <Image style={styles.vertic} source={item} /> */}
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
        {/* <Text>{prop.uri}</Text> */}
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
  vertic: {},
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
