import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import ButtomComp from "../../components/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            //selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedDate: date,
        });
    }

    render() {
        const { selectedDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2050, 6, 3);
        const startDate = selectedDate ? selectedDate.toString() : "";
        let d = new Array();
        d = startDate.split(" ");
        // let date = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;

        return (
            <View>
                <View style={styles.container2}>
                    <Text style={styles.basetext}>Pick a Date</Text>
                    <Text style={styles.bbasetext}>
                        {d[2]} {d[1]} {d[3]}
                    </Text>
                </View>

                <CalendarPicker
                    style={calendarstyles.container}
                    startFromMonday={true}
                    allowRangeSelection={false}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={this.onDateChange}
                />

                <ButtomComp text="Select Date" style={styles.button} />
            </View>
        );
    }
}

const calendarstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 200,
        marginBottom: 0,
        // zIndex: 1,

        // height: 200,
    },
});

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#66C4D2",
        borderRadius: 10,
        height: 20,
        width: "100%",
        marginTop: -500, //-420
        marginLeft: "0%",
        marginHorizontal: "10%",
    },
    button: {
        marginTop: 0,
        marginHorizontal: "15%",
        marginTop: 30,
    },
    container2: {
        backgroundColor: "white",
        borderRadius: 10,
        height: 60,
        width: "100%",
        marginTop: 40,
        marginBottom: 20,
        marginLeft: "0%",

        // marginHorizontal: "10%",
    },
    basetext: {
        // fontFamily: "Helvetica",
        fontSize: 25,
        alignSelf: "center",
    },
    bbasetext: {
        fontSize: 20,
        alignSelf: "center",
    },
});

export default App;
