import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function homeAvatar({navigation}) {
    return (
      <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 45}}>Meet Joy,your new assitant! He is here to motivate 
          you and make learning fun!
        </Text>
          <Image source={require('../assets/Group29.png')}/>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('editAvatar')}>
            <Text style={styles.button}>Edit Avatar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
  buttoncontainer: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "black",
    marginRight: 100
  }, 
  buttoncontainers: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "black",
    marginRight: 100,
    left: 130,
    bottom: 50
  },
  button: {
   fontSize: 15,
   color: 'white',
   fontWeight: 'bold'
  },
  continue: {
   fontSize: 15,
   color: 'white',
   fontWeight: 'bold'
  },
});
