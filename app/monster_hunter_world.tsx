import * as React from 'react';
import { ExternalLink } from '@/components/ExternalLink';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity, Button } from 'react-native';
import { router, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native';

const Page = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
            <TouchableOpacity style={[styles.buttonContainer]} onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
              <Feather name="grid" size={40} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Monster Hunter World</Text>
            <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./monster_hunter_World/armes/choix_type')}>
            <Text style={styles.loginText}>Armes</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./monster_hunter_World/armure/choix_rank')}>
            <Text style={styles.loginText}>Armures</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./monster_hunter_World/monstres/choix_monstre')}>
            <Text style={styles.loginText}>Monstres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./monster_hunter_World/items/choix_item')}>
            <Text style={styles.loginText}>Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./monster_hunter_World/meca/acceuil_meca')}>
            <Text style={styles.loginText}>Meca</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => router.push('./monster_hunter_World/npc/choix_npc')}>
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