import * as React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text, TouchableOpacity, Alert, Button } from 'react-native';
import Slider from '@/components/Slider';
import { router, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

const Page = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.maincontainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
        <View style={styles.bar}>
          <View style={styles.loginContainer}>
          <TouchableOpacity onPress={() => router.push('./login')}>
          <Image source={require('@/assets/images/profilePictures.jpg')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer]} onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
              <Feather name="grid" size={40} color="white" />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
        </View>
        <View>
          <View>
            <Slider/>
          </View>
          </View> 
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({

  maincontainer: {
    flex:1,
    width:"100%",
    height:"100%",
  },

  bar: {
    flex: 1,
  },

  loginContainer:{
    flexDirection:"row-reverse",
    width:"100%",
    height:"100%",
    marginLeft: -10,
    marginTop: 50
  },

  text:{
    color: '#ffffff'
  },

  image:{
    borderRadius: 500,
    height: 100,
    width: 100,
  },

  fond: {
    flex: 1,
  },
  
  logo: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 50,
  },

  logoContainer: {
    flexDirection:"column",
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginRight: 230,
    height: 50,
    width: 50,
    borderRadius: 30,
  },

});

export default Page;