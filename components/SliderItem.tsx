import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Linking, Text } from "react-native";
import { ImageSliderType } from "@/data/SliderData";
import { useNavigation } from '@react-navigation/native';

type Props = {
    item: ImageSliderType;
    index: number;
};
const { width } = Dimensions.get('screen');

const SliderItem = ({ item, index }: Props) => {
    const navigation = useNavigation();
    const handlePress = () => {
        if (item.link) {
            navigation.navigate(item.link);

        }
    };

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={handlePress}>
                <Image source={item.image} style={styles.imageContainer} />
            </TouchableOpacity>
        </View>
    );
};

export default SliderItem;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width,
    },

    imageContainer: {
        width: 200,
        height: 300,
        borderRadius: 20,
        marginBottom: 200,
    },
});