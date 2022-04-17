import ButtonComp from "../../components/Button";
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TopBar from "../../components/TopBar";
import TextButton from "../../components/TextOnlyButton";
//import BackgroundButton from "../components/ButtonWithGivenColour";

var array = new Array();
var twodarray = new Array();
array.push("Buddy");
array.push("Deworming");
array.push("Dog");
array.push("Sarah Dar");
array.push("08:00");
array.push("Thursday");
array.push("7th April 2022");
twodarray.push(array);

function VetPendAppointments() {
  return (
    <View>
      <TopBar
        textStyle={styles.text}
        text="Pending Requests"
        style={styles.bar}
      />
      <View style={{ flexDirection: "row" }}>
        <ButtonComp
          style={styles.buttonContainerGreen}
          text="   Accept All"
        />
        <ButtonComp style={styles.buttonContainerRed} text="Reject All" />
      </View>
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.baseText2}>{twodarray[0][2]}</Text>
            <Text style={styles.baseText3}>for </Text>
            <Text style={styles.baseText4}>{twodarray[0][1]}</Text>
          </View>
          <View style={styles.container1}>
            <Image
              style={styles.imageformatting}
              source={require("../../../assets/appointmentsimg.png")}
            />
            <Text style={styles.baseText}>{twodarray[0][0]}</Text>
          </View>
          <Text style={styles.baseText1}>Owned by: {twodarray[0][3]}</Text>
        </View>
        <Text style={styles.timetext}>{twodarray[0][4]}</Text>
        <Text style={styles.day}>{twodarray[0][5]}</Text>
        <Text style={styles.date}>{twodarray[0][6]}</Text>
        <ButtonComp style={styles.singleAcceptGreen} />
        <Image
          style={styles.imageformattingtick}
          source={require("../../../assets/tick.png")}
        />
        <ButtonComp style={styles.singleAcceptRed} />
        <Image
          style={styles.imageformattingcross}
          source={require("../../../assets/cross.png")}
        />
      </View>
    </View>
  );
}

VetPendAppointments.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
    bar:{
        color: "rgba(67, 105, 219, 0.8)"
    },
  baseText: {
    fontSize: 20,
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
    marginLeft: "13%",
    marginTop: "2%",
  },
  timetext: {
    fontSize: 30,
    fontFamily: "Helvetica",
    color: "#326273",
    fontWeight: "bold",
    marginLeft: "57%",
    marginTop: "-44%",
  },
  day: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#326273",
    fontWeight: "bold",
    marginLeft: "57%",
    marginTop: "17%",
  },
  date: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#326273",
    fontWeight: "bold",
    marginLeft: "57%",
    marginTop: "0%",
  },
  baseText1: {
    fontSize: 15,
    marginLeft: "4.5%",
    marginTop: "3%",
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  baseText2: {
    fontSize: 15,
    marginLeft: "40%",
    marginTop: "25%",
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  baseText3: {
    fontSize: 15,
    marginLeft: "45%",
    marginTop: "5%",
    fontFamily: "Helvetica",
    color: "white",
  },
  baseText4: {
    fontSize: 15,
    marginLeft: "10.5%",
    marginTop: "5%",
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  container: {
    width: "85%",
    height: "30%",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "7%",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "blue",
  },
  container1: {
    backgroundColor: "#326273",
    marginTop: "-59%",
    borderRadius: 5,
    width: "50%",
    height: "80%",
  },
  container3: {
    backgroundColor: "#E39774",
    width: "56%",
    height: "80%",
    borderRadius: 5,
    marginLeft: "44%",
  },
  container2: {
    width: "50%",
    height: "80%",
    marginTop: "5%",
    marginBottom: "7%",
    marginLeft: "3%",
    backgroundColor: "#66C4D2",
    borderRadius: 5,
  },
  imageformatting: {
    height: "60%",
    marginLeft: "20%",
    marginTop: "13%",
  },
  imageformattingtick: {
    height: "100%",
    resizeMode: "contain",
    marginLeft: "77%",
    marginTop: "-34%",
  },
  imageformattingcross: {
    height: "100%",
    resizeMode: "contain",
    marginLeft: "78%",
    marginTop: "-36%",
  },
  singleAcceptGreen: {
    backgroundColor: "green",
    width: "17%",
    height: "54.5%",
    borderRadius: 5,
    marginLeft: "83%",
    marginTop: "-41.5%",
  },
  singleAcceptRed: {
    backgroundColor: "red",
    width: "17%",
    height: "50%",
    borderRadius: 5,
    marginLeft: "83%",
    marginTop: "-14%",
  },
  buttonContainerGreen: {
    padding: "5%",
    borderRadius: 20,
    width: "40%",
    marginTop: "15%",
    marginLeft: "5%",
    height: "55%",
  },
  buttonContainerRed: {
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    marginTop: "15%",
    marginLeft: "8%",
    height: "55%",
  },
});

export default VetPendAppointments;






// import React from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import ButtomComp from "../../components/Button";
// import TopBar from "../../components/TopBar";


// var array = new Array()
// var twodarray = new Array();
// array.push("Spikey");
// array.push("Deworming");
// array.push("Dog");
// array.push("SarahDar");
// twodarray.push(array);

// function VetPendAppointments() {
//     return (
//         <View >
//         <TopBar text = "View Appointments"/>
//         <View style={{ flexDirection: "row" }}>
//             <ButtomComp style={style.buttonContainerGreen} text="Accept All" />
//             <ButtomComp style={style.buttonContainerRed} text="Reject All" />
//         </View>
//             <View style = {style.container}>
//                 <View>
//                     <Image
//                     style={style.img}
//                     source={require("../../../assets/appointmentsimg.png")}
//                     />
//                 </View>
//                 <Text style = {style.baseText}>{twodarray[0][0]} for {twodarray[0][1]} {"\n"}{twodarray[0][2]} owned by {twodarray[0][3]}</Text>
//             </View>
//         </View>
        


//     );
// }

// VetPendAppointments.navigationOptions = () => {
//     return {
//       headerShown: false,
//     };
//   };

//   const style = StyleSheet.create({
//       baseText:{
//           fontSize: 30,
//          // fontFamily: "Helvetica",
//           marginRight: 20,
//       },
//       container:{
//           height:110,
//           width: 350,
//           marginTop: 20,
//           marginBottom: 20,
//           marginLeft:10,
//           backgroundColor: "white",
//           borderRadius: 5,
//           borderColor: "blue",
//           padding: 5,
//       },
//       button1: {
//         marginLeft:30,
//       },
//       buttonContainerGreen:{
//         marginTop: 50,
//         marginLeft: 60,
//         marginRight: 20,
//       },
//       buttonContainerRed:{

//         marginTop: 50,
//        // marginLeft: 20,
//       },
//       img: {
//         resizeMode: "contain",
//         height: "30%",
//         alignSelf: "center",
//         //marginLeft: "25%",
//         marginTop: "24%",
//       },
//   });


//   export default VetPendAppointments;