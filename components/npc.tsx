import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import  { FakeData }  from "@/data/NpcData";
import NpcItem from "./npcItem";

const NPC= () =>{
    return(
        <View>
            <FlatList 
            data={FakeData} 
            renderItem={({item, index}) => ( 
                <NpcItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        />
        </View>
    )
}

export default NPC;