import { FlatList, View } from "react-native";

const FlatListComponent = ({ Child, list, navigation, vet_id, updateList }) => {
    return (
        <FlatList
            style={{ marginTop: "2%" }}
            keyExtractor={(x) => x._id}
            data={list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Child
                            prop={item}
                            navigation={navigation}
                            vet_id={vet_id}
                            updateList={updateList}
                        />
                    </View>
                );
            }}
        />
    );
};

export default FlatListComponent;
