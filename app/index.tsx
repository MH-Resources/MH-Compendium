import * as React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { useState } from 'react';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { MotiView } from 'moti'
import AntDesign from '@expo/vector-icons/AntDesign';

const Page = () => {

  const [gestureName, setGestureName] = useState('none');

  const onSwipeUp = (gestureName) => {
    const { SWIPE_UP } = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        router.push('./acceuil');
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };


  return(

    <GestureRecognizer
      onSwipe={(direction) => onSwipeUp(direction)}
      config={config}
      style={{
        flex: 1,
      }}
    >

    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>MH</Text>
            <Text style={styles.text}>Compendium</Text>

            <View style={styles.images}>
              <Image source={require('@/assets/images/profilePictures.jpg')} style={styles.image} />
            </View>

            <View style={styles.sign}>
            <TouchableOpacity onPress={() => router.push('./login')}>
              <Text style={styles.text}>Sign-in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {Alert.alert('You clicked it!', 'You clicked it!')}}>
              <Text style={styles.text}>Sign-up</Text>
              </TouchableOpacity>

              <View style={styles.swipe}>
              <Text style={{color:'#FFD700'}}>Swipe</Text>
              <MotiView
                from={{
                  translateY: -10
                }}
                animate={{
                  translateY: 0,
                }}
                transition={{
                  loop: true,
                  type: 'timing',
                  duration: 1500,
                  delay: 100,
                }}>
              <AntDesign name="up" size={70} color="gold" />
              </MotiView>
              </View>

            </View>
          </View>
          </ImageBackground>
        </View>
      </View>
      </GestureRecognizer>
  );
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    width:"100%",
    height:"100%",
  },

  imageContainer: {
    flex: 1,
  },

  textContainer:{
    marginBottom: 30,
    paddingTop: 5,
  },

  text:{
    alignSelf: 'center',
    color: '#ffffff'
  },

  image:{
    alignSelf: 'center',
    borderRadius: 500,
    height: 300,
    width: 300,
  },

  images:{
    alignSelf: 'center',

  },

  sign: {
    alignSelf: 'center',
    marginTop: 50,  
  },

  fond: {
    flex: 1,
    justifyContent: 'center',  
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },

  loginButton: {
    backgroundColor: '#00b5ec',
    alignSelf:'center'
  },

  loginText: {
    color: 'white',
  },

  swipe:{
    flexDirection:'column',
    alignSelf:'center',
    alignItems:'center',
    position:'absolute',
    bottom: -230,
  },

  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },

});

export default Page;
