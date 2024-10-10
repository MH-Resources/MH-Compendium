import * as React from 'react';
import { ExternalLink } from '@/components/ExternalLink';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity, Button } from 'react-native';
import { router } from 'expo-router';

const Page = () => {
  return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
            <Text style={styles.title}>Monster Hunter World</Text>
            <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./strats/choix_difficulte')}>
            <Text style={styles.loginText}>Strats</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./meca_basique/choix_difficulte')}>
            <Text style={styles.loginText}>Meca Basique</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./meca_monstres/choix_difficulte')}>
            <Text style={styles.loginText}>Meca Monstres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./quest/choix_quest')}>
            <Text style={styles.loginText}>Quest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./maps/choix_map')}>
            <Text style={styles.loginText}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./mods_utiles/choix_mod')}>
            <Text style={styles.loginText}>Mods Utiles</Text>
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

  title:{
    justifyContent: 'center',
    alignItems:'center',
    color: '#ffffff'
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