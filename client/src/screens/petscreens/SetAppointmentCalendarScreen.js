import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import ErrorTextComponent from "../../components/ErrorTextComponent";
import ButtomComp from "../../components/Button";
import { errorNull } from "../../inputvalidation/validators";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            type: props.route.params.type,
            vet_id: props.route.params.vet_id,
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
        const errMsgDate = errorNull(this.state.selectedDate);

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

                {errMsgDate ? (
                    <ButtomComp text="Login" style={styles.button} disabled />
                ) : (
                    <ButtomComp
                        text="Select Date"
                        style={styles.button}
                        onChange={() =>
                            this.props.navigation.navigate("AppTime", {
                                date: this.state.selectedDate
                                    .toString()
                                    .split(" "),
                                type: this.state.type,
                                vet_id: this.state.vet_id,
                            })
                        }
                    />
                )}
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
