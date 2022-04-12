import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import TopBar from "../../components/TopBar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CompButton from "../../components/Button";

const Editserv = () => {
  const datalist = [
    { _id: 1, name: "Grooming", price: 300 },
    { _id: 2, name: "Deworming", price: 400 },
    { _id: 3, name: "Haircut", price: 200 },
  ];
  return (
    <View>
      <TopBar text="Edit Service" textStyle={styles.text} style={styles.bar} />
      <View style={styles.bigcontainer}>
        <FlatList
          keyExtractor={(x) => x._id}
          data={datalist}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.container}>
                  <Text style={styles.datatext}>
                    {item.name} Rs. {item.price}
                  </Text>
                </View>
                <Button
                  title=""
                  //   styles={{ marginRight: "10%" }}
                  icon="cancel"
                />
                {/* <MaterialIcons name="cancel" /> */}
              </View>
            );
          }}
        />
        <CompButton text="Add Service" style={styles.addserv} />
      </View>
      <CompButton text="Save" style={styles.savebutton} />
    </View>
  );
};

Editserv.navigationOptions = () => {
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
  },
  addserv: {
    marginHorizontal: "20%",
    marginVertical: "10%",
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
  savetext: {
    color: "black",
    fontSize: 20,
  },
  savebutton: {
    marginVertical: "5%",
    backgroundColor: "#326273",
    marginHorizontal: "30%",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default Editserv;
