import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
 
export default class editAvatar extends Component{
  // using image slider to display all images
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/Group29.png'),
        require('../assets/Group27.png'),
        require('../assets/Group32.png'),
        require('../assets/Group6798.png'),
        require('../assets/Group6799.png'),
      ]
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 45}}>Great! Let's design your very own assistant now </Text>
        <SliderBox
          style={styles.slider}
          images={this.state.images}
          onCurrentImagePressed={index =>
          console.warn(`image ${index} pressed`)
          }
        />  
        <TextInput
        style={styles.textinput}
        placeholder="Name of your assistant"
      />
        <View style={styles.buttoncontainer}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('welcomeAvatar')}>
            <Text style={styles.button}>Create Assistant</Text>
            </TouchableOpacity>
        </View>
      </View>
    ); 
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttoncontainer: {
    margin: 10,
    paddingHorizontal: 100,
    paddingVertical: 18,
    borderRadius: 16,
    backgroundColor: "black",
    marginRight: 100,
    left: 50
  },
  button: {
   fontSize: 15,
   color: 'white',
   fontWeight: 'bold'
  }, 
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});