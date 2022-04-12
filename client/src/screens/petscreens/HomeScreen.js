import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import { Provider } from "react-native-paper";
import Bar from "../../components/Bar";
import TopBar from "../../components/TopBar";
import Search from "../../components/SearchBar";

const HomeScreen = () => {
    const queryRes = [
        { uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" },
        { uri: "https://images.app.goo.gl/EPHJMsV1NoXGpxG16" },
        { uri: "https://images.app.goo.gl/9CCMAykjgLqNkNYa9" },
    ];
    const queryRes2 = [
        { uri: "shorturl.at/uEHMZ" },
        { uri: "shorturl.at/fkmvC" },
        { uri: "shorturl.at/kpGLY" },
    ];
    return (
        <Provider>
            <TopBar textStyle={styles.text} style={styles.bar} text="Clinics" />
            <Search style={styles.input} />
            <FlatList
                keyExtractor={(x) => x.uri}
                data={queryRes}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Image style={styles.horiz} source={item} />}
            />
            <FlatList
                keyExtractor={(x) => x.uri}
                data={queryRes2}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.uri}</Text>
                            {/* <Image style={styles.vertic} source={item} /> */}
                        </View>
                    );
                }}
            />
            <Bar style={styles.lowbar} />
        </Provider>
    );
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    input: {
        marginTop: "3%",
        marginHorizontal: "8%",
    },
    horiz: {
        height: 200,
        width: 300,
    },
    vertic: {},
    text: {
        marginLeft: "31%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
    },
    lowbar: {
        marginBottom: "1%",
        height: "5%",
    },
});

export default HomeScreen;
