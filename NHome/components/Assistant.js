 import React, {useState} from 'react';  
import {StyleSheet, Text, View, Image} from 'react-native';
 import Icon from 'react-native-vector-icons/AntDesign';

export default function AssistantScreen () {
 return (  
    <View style={styles.container}>
        <Icon size={30} name={'leftcircleo'} style={{ right: 180, top: 150}}/>      
        <Text style={styles.textfeature}>Assistants & Pets</Text>
        <View style={styles.card1}>
            <Image source={require('../assets/pirate.png')} style={{left: 100, top: 10}}/>
        </View>
        <Text style={{fontSize: 21, textAlign: 'center', top: 130}}>Silly Pirate Assitant</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', top: 130}}>$20 OR 200 NerdyPoints</Text>
        <View style={styles.card2}>   
            <Image source={require('../assets/woman.png')} style={{left: 100, top: 20}}/>
        </View>
        <Text style={{fontSize: 21, color: '#18191f', top: 130}}>Cool Hijabi</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', top: 130}}>$30 OR 100 NerdyPoints</Text>
        <View style={styles.card3}>
             <Image source={require('../assets/cat.png')} style={{left: 20, top: 15}}/>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15, right: 130, top: 130}}>Cute Puppy</Text>
        <View style={styles.card4}>
             <Image source={require('../assets/mokey.png')} style={{left: 20, top: 15}}/>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Cool Monkey</Text>
        <View style={styles.card5}>
             <Image source={require('../assets/spacemonkey.png')} style={{left: 20, top: 15}}/>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15, bottom: 130, left: 130}}>Space Monkey</Text>
    </View>   
    );  
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
         flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center'  
    }, 
    textfeature: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#18191F',
        top: 120
    },
    card1: {
        height: 212,
        width: 327,
        top: 130,
        borderRadius: 12,
        backgroundColor: '#F95A2C'
    },  
    card2: {
        height: 212,
        width: 327,
        top: 130,
        borderRadius: 12,
        backgroundColor: '#FFBD12'
    },
    card3: {
        height: 117,
        width: 120,
        right: 130,
        top: 130,
        borderRadius: 12,
        backgroundColor: '#F95A2C'
    }, 
    card4: {
        height: 117,
        width: 120,
        borderRadius: 12,
        backgroundColor: '#00C6AE'
    },
    card5: {
        height: 117,
        width: 120,
        left: 130,
        bottom: 130,
        borderRadius: 12,
        backgroundColor: '#FF89BB'
    },
});  


