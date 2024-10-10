import * as React from 'react';
import { ExternalLink } from '@/components/ExternalLink';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity } from 'react-native';

const Page = () => {
  return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
            <Text style={styles.title}>Monster Hunter Frontier</Text>
            <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('Type 1')}>
            <Text style={styles.loginText}>Armes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('Type 2')}>
            <Text style={styles.loginText}>Armures</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('Type 3')}>
            <Text style={styles.loginText}>Monstres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('Type 4')}>
            <Text style={styles.loginText}>Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('Type 5')}>
            <Text style={styles.loginText}>Meca</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('Type 5')}>
            <Text style={styles.loginText}>NPC</Text>
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