import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import TopBar from "../../components/TopBar";
import CompButton from "../../components/Button";

const EditPets = () => {
  const datalist = [
    { _id: 1, name: "Bird", type: "Bird" },
    { _id: 2, name: "Cat", type: "Cat" },
    { _id: 3, name: "Dog", type: "Dog" },
  ];
  return (
    <View>
      <TopBar text="Edit My Pets" textStyle={styles.text} style={styles.bar} />
      <View style={styles.bigcontainer}>
        <FlatList
          keyExtractor={(x) => x._id}
          data={datalist}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.container}>
                  <Text style={styles.datatext}>{item.name}</Text>
                  <Text style={styles.datatext}>{item.type}</Text>
                </View>
                <CompButton text="Delete" style={{ marginVertical: "5%" }} />
              </View>
            );
          }}
        />
        <CompButton text="Add Pet" style={styles.addpet} />
      </View>
      <CompButton text="Save" style={styles.savebutton} />
    </View>
  );
};

EditPets.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  text: {
    marginLeft: "31%",
    color: "white",
    fontSize: 30,
  },
  bar: {
    backgroundColor: "#326273",
    marginTop: "5%",
  },
  container: {
    marginLeft: "5%",
    marginRight: "10%",
    backgroundColor: "white",
    marginVertical: "1%",
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  bigcontainer: {
    backgroundColor: "#324273",
    marginVertical: "10%",
    marginHorizontal: "10%",
    padding: "5%",
    borderRadius: 10,
  },
  datatext: {
    color: "black",
    fontSize: 20,
  },
  addpet: {
    marginHorizontal: "20%",
    marginVertical: "10%",
  },
  savebutton: {
    marginVertical: "5%",
    marginHorizontal: "30%",
  },
});

export default EditPets;
