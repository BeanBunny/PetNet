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

function VetCompleteAppointments() {
  return (
    <View>
 
      <TopBar
        textStyle={styles.text}
        text="Complete Requests"
        style={styles.bar}
      />
    
      <View style={styles.container}>
        <View style={styles.container2}>
        <Image
              style={styles.imageformatting}
              source={require("../../../assets/appointmentsimg.png")}
            />
            <Text>{twodarray[0][1]}</Text>
            {/* <Text style={styles.baseText2}>{twodarray[0][2]} for {twodarray[0][1]}</Text> */}
            {/* <Text style={styles.baseText3}>for </Text>
            <Text style={styles.baseText4}>{twodarray[0][1]}</Text>   */}
            {/* <Text style={styles.baseText}>{twodarray[0][0]}</Text>
          <Text style={styles.baseText1}>Owned by: {twodarray[0][3]}</Text> */}
        </View>
        <Text style={styles.timetext}>{twodarray[0][4]}</Text>
        <Text style={styles.day}>{twodarray[0][5]}</Text>
        <Text style={styles.date}>{twodarray[0][6]}</Text>
        <View  />
        
        <View  />
      </View>

      <View style={styles.container}>
        <View style={styles.container2}>
        <Image
              style={styles.imageformatting}
              source={require("../../../assets/appointmentsimg.png")}
            />
            <Text>Jaw Surgery</Text>
            {/* <Text style={styles.baseText2}>{twodarray[0][2]} for {twodarray[0][1]}</Text> */}
            {/* <Text style={styles.baseText3}>for </Text>
            <Text style={styles.baseText4}>{twodarray[0][1]}</Text>   */}
            {/* <Text style={styles.baseText}>{twodarray[0][0]}</Text>
          <Text style={styles.baseText1}>Owned by: {twodarray[0][3]}</Text> */}
        </View>
        <Text style={styles.timetext}>11:00</Text>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.date}>28th January 2022</Text>
        <View  />
        
        <View  />
      </View>
    </View>
  );
}

VetCompleteAppointments.navigationOptions = () => {
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
    color: "#6200F2",
    fontWeight: "bold",
    marginLeft: "30%",
    marginTop: "-43%",
  },
  day: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#6200F2",
    fontWeight: "bold",
    marginLeft: "30%",
    marginTop: "17%",
  },
  date: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#6200F2",
    fontWeight: "bold",
    marginLeft: "30%",
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
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "7%",
    // backgroundColor: "white",
    backgroundColor: "white",
    borderRadius:5,
  },
  container1: {
    // backgroundColor: "black",
    backgroundColor: "#326273",
    marginTop: "5%",
    width: "50%",
    height: "80%",
    flexDirection: "row",
    
  },
  container3: {
    backgroundColor: "#E39774",
    width: "56%",
    height: "80%",
    borderRadius: 5,
    marginLeft: "44%",
   
  },
  container2: {
    width: "25%",
    height: "80%",
    marginTop: "2%",
    marginLeft: "3%",
    // backgroundColor: "#66C4D2",
    backgroundColor: "white",
    borderRadius: 5,
    
  },
  imageformatting: {
    height: "60%",
    marginLeft: "20%",
    marginTop: "1%",
    width:"50%",
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
    backgroundColor: "#6877FE",
    width: "17%",
    height: "45%",
    borderRadius: 5,
    marginLeft: "83%",
    marginTop: "-40%",
  },
  singleAcceptRed: {
    backgroundColor: "#6877FE",
    width: "17%",
    height: "45%",
    borderRadius: 5,
    marginLeft: "83%",
    marginTop: "-12%",
  },
  buttonContainerGreen: {
    padding: "5%",
    borderRadius: 20,
    width: "40%",
    marginTop: "15%",
    marginLeft: "5%",
    height: "75%",
  },
  buttonContainerRed: {
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    marginTop: "15%",
    marginLeft: "8%",
    height: "75%",
  },
});

export default VetCompleteAppointments;






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