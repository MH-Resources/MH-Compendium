import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Linking, Text } from "react-native";
import { FakeDataType } from "@/data/NpcData";

type Props = {
    item: FakeDataType;
    index: number;
};
const { width } = Dimensions.get('screen');

const NpcItem = ({ item, index }: Props) => {

    return (
        <View style={styles.itemContainer} key={item.id}>
        <Image source={item.image} style={styles.imageContainer}/>
         <Text>{item.name}</Text>
         <Text>Race / Gender:</Text>
         <Text>{item.race} / {item.gender}</Text>
         <Text>Description</Text>
         <Text>{item.desc}</Text>
         <Text>Location:</Text>
         <Text>{item.location}</Text>
        </View>
    );
};

export default NpcItem;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width,
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 20,
        marginTop: 100,
    },
});