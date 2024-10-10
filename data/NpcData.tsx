import { ImageSourcePropType } from "react-native";

export type FakeDataType = {
    id: number;
    name: string;
    image: ImageSourcePropType;
    race: string;
    gender: string;
    desc: string;
    location: string;
};

export const FakeData = [
    {
        id:1,
        image:require('@/assets/images/admiral.webp'),
        name:'Admiral (Waifu)',
        race:'Human',
        gender:'Male',
        desc:"The great Leader of the Research Commission, only appearing late in the  Hunter adventure, he'll help the Hunter investigating the greater menace  that sleeps deep inside the New World.",
        location:'Top of Astera, by the watchtower after Land of Convergence'
        },
    
    
        {
        id:2,
        image:require('@/assets/images/serious_handler.png'),
        name:"Serious Handler",
        race:"Human",
        gender:"Female",
        desc:"desc (WIP)",
        location:"location (WIP)"
        }
];