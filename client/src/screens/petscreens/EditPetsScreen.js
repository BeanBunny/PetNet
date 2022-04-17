import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import TopBar from "../../components/TopBar";
import CompButton from "../../components/Button";
import restApi from "../../api/restApi";

const EditPets = ({ route, navigation }) => {
  const [petProfile, setPetProfile] = useState(route.params?.profile);
  return (
    <View>
      <TopBar text="Edit My Pets" textStyle={styles.text} style={styles.bar} />
      <View style={styles.bigcontainer}>
        {petProfile.length !== 0 ? (
          <FlatList
            keyExtractor={(x) => x._id}
            data={petProfile}
            renderItem={({ item }) => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.container}>
                    <Text style={styles.datatext}>{item.petName}</Text>
                    <Text style={styles.datatext}>{item.petType}</Text>
                  </View>
                  <CompButton
                    text="Delete"
                    style={{ marginVertical: "5%" }}
                    onChange={async () => {
                      try {
                        let resp = await restApi.post("/petowner/remove-pet", {
                          petId: item._id,
                        });
                        setPetProfile(resp.data);
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        ) : null}
        <CompButton
          text="Add Pet"
          style={styles.addpet}
          onChange={() => navigation.navigate("AddPetsScreen")}
        />
      </View>
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
