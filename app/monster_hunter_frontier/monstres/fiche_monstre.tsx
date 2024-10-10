import * as React from 'react';
import { ExternalLink } from '@/components/ExternalLink';
import { StyleSheet, Image, View, ImageBackground, Text, Alert,TouchableOpacity } from 'react-native';

const Page = () => {
  return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={require('@/assets/images/Fond_fiche.png')} resizeMode="cover" style={styles.fond}>
            <Text>Fiche Monstre</Text>

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

});

export default Page;