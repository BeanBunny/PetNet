import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtomComp from "../components/button";

var array = new Array()
var twodarray = new Array();
array.push("Spikey");
array.push("Deworming");
array.push("Dog");
array.push("SarahDar");
twodarray.push(array);

function VetPendAppointments() {
    return (
        <View >
        <View style={{ flexDirection: "row" }}>
            <ButtomComp style={style.buttonContainerGreen} text="Accept All" />
            <ButtomComp style={style.buttonContainerRed} text="Reject All" />
        </View>
            <View style = {style.container}>
                <Text style = {style.baseText}>{twodarray[0][0]} for {twodarray[0][1]} {"\n"}{twodarray[0][2]} owned by {twodarray[0][3]}</Text>
            </View>
        </View>
        


    );
}

VetPendAppointments.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

  const style = StyleSheet.create({
      baseText:{
          fontSize: 30,
          fontFamily: "Helvetica",
          marginRight: 20,
      },
      container:{
          height:110,
          width: 350,
          marginTop: 20,
          marginBottom: 20,
          marginLeft:10,
          backgroundColor: "white",
          borderRadius: 5,
          borderColor: "blue",
          padding: 5,
      },
      button1: {
        marginLeft:30,
      },
      buttonContainerGreen:{
        backgroundColor: "green",
        padding: "5%",
        borderRadius: 20,
        alignItems: "center",
        width: 120,
        marginTop: 120,
        marginLeft: 60,
      },
      buttonContainerRed:{
        backgroundColor: "#B22222",
        padding: "5%",
        borderRadius: 20,
        alignItems: "center",
        width: 120,
        marginTop: 120,
        marginLeft: 20,
        height: 70,
      },
  });


  export default VetPendAppointments;