import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, Alert  } from 'react-native';

import React, { useState } from 'react'

export default function profile() {
      
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
    
    
      return (
        
        <View style={styles.fond}>
            <ImageBackground source={require('@/assets/images/Fond.png')} resizeMode="cover" style={styles.fond}>
            <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => setEmail({ email })}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => setPassword({ password })}
            />
          </View>
          
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => Alert.alert('login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Alert.alert('forgot password')}>
            <Text style={styles.loginText}>Forgot your password?</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Alert.alert('sign up')}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>
      )
    }
    
    const styles = StyleSheet.create({

        fond:{
            flex: 1,
        },

      container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
      },

      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
      },

      inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
      },
      inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
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
    })
