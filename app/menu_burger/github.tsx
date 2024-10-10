import * as React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity, Linking } from 'react-native';
import { router } from 'expo-router';

const Page = () => {
  return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/TruitosTV')}>
            <Image source={require('@/assets/images/icon.png')} style={styles.image}/>
            <Text>Github 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/5p3c7r4l')}>
            <Image source={require('@/assets/images/profilePictures.jpg')} style={styles.image}/>
            <Text>Github 2</Text>
        </TouchableOpacity>

          </ImageBackground>
        </View>
      </View>
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

  image:{
    borderRadius: 500,
    height: 200,
    width: 200,
  },
  
});

export default Page;