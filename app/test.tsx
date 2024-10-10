import { Image, StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import React, { useRef } from 'react';

import { Collapsible } from '@/components/Collapsible';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StatusBar } from 'expo-status-bar';

const localSource = require("../assets/videos/mhVideo.mp4");
const remoteSource = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

export default function HomeScreen() {
  const ref =  useRef(null);  
  const player = useVideoPlayer(localSource, player => {
    player.loop = true;
    player.staysActiveInBackground = true;
    player.muted = true;
    player.play();
  });

  return (
    <View>
        <View>
          <Text style={styles.text}>Salut !</Text>
            <VideoView ref={ref} player={player} style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").width * (9/16),
              }}
              allowsFullscreen={false}
              nativeControls={false}
              allowsPictureInPicture
              startsPictureInPictureAutomatically
               /> 
          <View style={styles.buttons}>
            <Button title='Play' onPress={()=> {
              player.play();
            }} />
            <Button title='Pause' onPress={()=> { 
              player.pause();
            }} />
          </View>

          <StatusBar style="auto"/>
          <Collapsible title="Ouvre pour voir">
          <Text style={styles.ouvre}>Bravo</Text>
          </Collapsible>

          <Image 
            source={require('@/assets/images/elder.gif')} style={{ 
            alignSelf: 'center',
            margin:16,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width * (9/16), 
            }}
            />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    marginBottom: 30,
  },

  ouvre: {
    color: "#ffffff",
    alignSelf:'center'
  },

  buttons: {
    margin:16,

  }

});
