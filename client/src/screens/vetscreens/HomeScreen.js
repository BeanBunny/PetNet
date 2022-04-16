import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Provider, Card } from "react-native-paper";
import TopBar from "../../components/TopBar";
import FlatListComponent from "../../components/FlatListComponent";

const MyCard = ({ prop }) => {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: "5%" }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text2}>{prop.Owner}</Text>
          <Text style={styles.text2}>{prop.Phone}</Text>
        </View>
        <View>
          <Text style={styles.text2}>{prop.Type}</Text>
          <Text style={styles.text2}>{prop.AddType}</Text>
        </View>
        <View>
          <Text style={styles.text2}>{prop.Time}</Text>
          <Text style={styles.text2}>{prop.Date}</Text>
        </View>
      </View>
      <View>
        <View style={styles.greenbox}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require("../../../assets/tick.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.redbox}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require("../../../assets/cross.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const queryRes = [
    {
      _id: 1,
      Owner: "SJC",
      Phone: "03154414300",
      Type: "Dog",
      AddType: "Deworming",
      Time: "8: 00",
      Date: "13/Feb/2021",
    },
    {
      _id: 2,
      Owner: "BB",
      Phone: "03154414300",
      Type: "Cat",
      AddType: "Grooming",
      Time: "8: 00",
      Date: "13/Feb/2021",
    },
    {
      _id: 3,
      Owner: "kr4ken",
      Phone: "03154414300",
      Type: "Cat",
      AddType: "Deworming",
      Time: "8: 00",
      Date: "13/Feb/2021",
    },
    {
      _id: 4,
      Owner: "Null",
      Phone: "03154414300",
      Type: "Snake",
      AddType: "Worming",
      Time: "8: 00",
      Date: "13/Feb/2021",
    },
  ];
  return (
    <Provider>
      <View>
        <TopBar
          text="Pending Requests"
          textStyle={styles.text}
          style={styles.bar}
        />
        <View style={styles.bigcontainer}>
          <FlatListComponent Child={MyCard} list={queryRes} />
        </View>
      </View>
    </Provider>
  );
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
    backgroundColor: "#326273",
    // marginHorizontal: "5%",
    flexDirection: "row",
  },
  text2: { color: "white", fontSize: 15, marginHorizontal: "2%" },
  greenbox: {
    borderRadius: 10,
    backgroundColor: "green",
  },
  redbox: {
    borderRadius: 10,
    backgroundColor: "red",
  },
  bigcontainer: {
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
});

export default HomeScreen;
