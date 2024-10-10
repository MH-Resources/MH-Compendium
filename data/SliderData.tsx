
import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    link: null;
};

export const ImageSlider = [
    {
        title: 'Monster Hunter World',
        image: require('@/assets/images/mhw.jpg'),
        link: 'monster_hunter_world',
    },
    {
        title: 'Monster Hunter Rise',
        image: require('@/assets/images/mhr.jpg'),
        link: 'monster_hunter_rise',
    },
    {
        title: 'Monster Hunter Frontier',
        image: require('@/assets/images/mhz.jpg'),
        link: 'monster_hunter_frontier',
    },
    {
        title: 'Monster Hunter Tri',
        image: require('@/assets/images/mhtri.jpg'),
        link: 'monster_hunter_tri',
    },
];