import React, { useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { View } from "react-native";
import { Card, Headline } from "react-native-paper";
import Button from "../../components/Button";

const HistoryScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View>
            <Headline>Appointments History</Headline>
            {/* <FlatList
                style={{ marginTop: "2%" }}
                keyExtractor={(x) => x._id}
                data={queryRes}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Mycard prop={item} />
                        </View>
                    );
                }}
            /> */}
        </View>
    );
};

const Mycard = ({ prop }) => {
    // console.log(prop);
    return (
        <View style={styles.list}>
            <TouchableOpacity onPress={() => {}}>
                <Card>
                    <Card.Title
                        style={styles.image}
                        title={JSON.stringify(prop)}
                    />
                    <Card.Actions />
                </Card>
            </TouchableOpacity>
        </View>
    );
};

export default HistoryScreen;
