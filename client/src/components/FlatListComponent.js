import { FlatList, View } from "react-native";

const FlatListComponent = ({ Child, list }) => {
    return (
        <FlatList
            style={{ marginTop: "2%" }}
            keyExtractor={(x) => x._id}
            data={list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Child prop={item} />
                    </View>
                );
            }}
        />
    );
};

export default FlatListComponent;
