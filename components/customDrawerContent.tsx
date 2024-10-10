import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';

export default function CustomDrawerContent(props:any){

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <Image style={{height: 200, justifyContent:'center', alignSelf:'center'}} resizeMode='contain' source={require('@/assets/images/Logo.png')}/>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Pressable style={{padding:20}} onPress={() => router.push('/menu_burger/github')}>
                <Text>Github</Text>
            </Pressable>
        </View>
    )
}