 import React from 'react';  
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
 import Icon from 'react-native-vector-icons/AntDesign';

export default function PerksScreen() {
 return (  
    <View style={styles.container}>
        <Icon size={30} name={'leftcircleo'} style={{right: 180, top: 35}}/>      
        <Text style={styles.textfeature}>Perks</Text>
            <View style={styles.card1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Features')}>
                    <Image source={require('../assets/lock.png')} style={{ left: 100, top: 50}}/>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize: 25, fontWeight: 'bold', top: 23}}>In-app Perks</Text>
            <View style={styles.card2}>
                <Image source={require('../assets/cards.png')} style={{ left: 60, top: 50}}/>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center', top: 23}}>Gift Cards</Text>
            <View style={styles.card3}>
                <Image source={require('../assets/clothes.png')} style={{left: 80, top: 50}}/>
            </View>
            <Text style={{fontSize: 25, fontWeight: 'bold', top: 23}}> Assistant Accessories</Text>
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
    },
    card1: {
        height: 212,
        width: 327,
        top: 24,
        borderRadius: 12,
        backgroundColor: '#5906C3'
    },
    card2: {
        height: 212,
        width: 327,
        top: 24,
        borderRadius: 12,
        backgroundColor: '#122AFF'
    },
    card3: {
        height: 212,
        width: 327,
        top: 24,
        borderRadius: 12,
        backgroundColor: '#FA00FF'
    }
});  


