import React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { router, useNavigation } from 'expo-router';
import  NPC  from '@/components/npc';

const Page = () => {

  const [gestureName, setGestureName] = useState('none');

  const onSwipeRight = (gestureName) => {
    const { SWIPE_RIGHT } = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_RIGHT:
        router.push('./choix_npc');
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return(

    <GestureRecognizer
      onSwipe={(direction) => onSwipeRight(direction)}
      config={config}
      style={{
        flex: 1,
      }}
    >

    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond_fiche.png')} resizeMode="cover" style={styles.fond}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <NPC />
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


fond: {
    flex: 1,
    justifyContent: 'center',  
  },

});

export default Page;