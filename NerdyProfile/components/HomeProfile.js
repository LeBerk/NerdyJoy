import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, CheckBox } from 'react-native';
// importing Segmented Control Tab
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Icon from 'react-native-vector-icons/Entypo';

function HomeProfile () {

  // For custom SegmentedControlTab
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setCustomStyleIndex(index);
  };

  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <View
            style={{
                backgroundColor: "#FF89BB",
                height: 200
            }}
        >
         <Image 
         style={{left: 145, width: 130, height: 200}}
         source={require('../assets/Group29.png')}/>
        </View>
        <View
            style={{
                backgroundColor: "black",
                width: "100%",
                height: "10%",
            }}
        >
            <Text
                style={{
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 36,
                }}
            >Berk</Text>
            <Text
                style={{
                    color: "white",
                    textAlign: 'center',
                    fontSize: 17,
                }}
            >@berktheboss</Text>
        </View>     
     <View>
        <Text
            style={{
                fontSize: 27,
                textAlign: 'center'
            }}
        >276</Text>
        <Text 
            style={{
                fontSize: 15,
                textAlign: 'center'
            }}
        >NerdyPoints</Text>
      </View>
      {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['Badges', 'Lessons', 'Goals']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={26}
          tabsContainerStyle={{ height: 50}}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: '#00C6AE' }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#fff' }}
        />
        {customStyleIndex === 0 && (
        <>
          <Image 
            style={styles.logo1}
            source={require('../assets/mn.png')}
          /> 
          <Image 
          style={styles.logo2}
          source={require('../assets/nm.png')}
          />
          <Image 
          style={styles.logo3}
          source={require('../assets/bn.png')}
          />
          <Image 
          style={styles.logo4}
          source={require('../assets/men.png')}
          />
        </>
        )}
        {customStyleIndex === 1 && (
          <>
          <View style={{
            backgroundColor: "#E9E7FC",
            width: 315,
            left: 50,
            top: 30,
            borderRadius: 16,
            borderColor: 'black',
            borderStyle: 'solid',
          }}>
            <Text style={styles.textdate} numberOfLines={2}>By Berk - May 21st, 2021</Text>
            <Text style={styles.lessontext} numberOfLines={2}>How to overcome commitment issues</Text>
              <View style={styles.readButton}>
                <Text>Read</Text>
              </View>
            <View style={styles.reflectionButton}>
              <Text>Reflection</Text>
            </View>
          </View>
          <View style={{
            backgroundColor: '#97DAB7',
            width: 315,
            borderRadius: 16,
            left: 50,
            top: 60
          }}>
            <Text style={{
              left: 13.6,
              color: 'black',
              fontWeight: 'normal',
              fontSize: 12
            }}>By Berk - June 12th, 2021</Text>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#18191F',
              left: 5
            }}>What is the stock market & How to invest in it!</Text>
            <View style={styles.readButton}>
                <Text>Read</Text>
            </View>
            <View style={styles.reflectionButton}>
              <Text>Reflection</Text>
            </View>
          </View>
          </>
        )}
        {customStyleIndex === 2 && (
          <>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
            <Text style={styles.label}>Learn Python</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Start investing</Text>
          </View>
        </>
         )}
    </SafeAreaView>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    textAlign: 'center',
    bottom: 130
  },
  seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
  textdate: {
    fontSize: 12,
    top: 10,
    left: 10
  },
  lessontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
    top: 12,
    left: 12
  },
  readButton: {
    backgroundColor: '#FFBD12',
    width: 60,
    height: 24,
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'column',
    display: 'flex',
    left: 12.8,
    right: 71.2,
    top: 17,
    borderColor: 'black',
  },
  reflectionButton: {
    width: 71,
    height: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    left: 100,
    top: -6,
    backgroundColor: '#FFBD12',
    borderRadius: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    left: 80,
    top: 50
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  logo1: {
    width: 107,
    height: 108,
    left: 50,
    top: 40
   },
   logo2: {
    width: 107,
    height: 108,
    left: 50,
    top: 50
   },
   logo3: {
    width: 107,
    height: 108,
    left: 250,
    bottom: 180
   },
   logo4:{
    width: 107,
    height: 108,
    left: 250,
    bottom: 160
   }
});