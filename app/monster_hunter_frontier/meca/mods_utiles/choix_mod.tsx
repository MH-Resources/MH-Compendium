import * as React from 'react';
import { ExternalLink } from '@/components/ExternalLink';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Page = () => {
  return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
            <Text>Choix mod</Text>
            <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./fiche_mod')}>
            <Text style={styles.loginText}>Fiche mod</Text>
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

  buttonContainer: {
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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


});

export default Page;