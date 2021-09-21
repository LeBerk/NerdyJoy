import React from 'react';  
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
 
 export default class Home extends React.Component{
     render()  {
 return (  
        <View style={styles.container}>       
            <Text style={styles.home}>HOME</Text> 
            <View style={{left: 150, bottom: 40}}>
                <Image source={require('../assets/top.png')} />
            </View>
            <Text style={{color: '#061DAB', fontSize: 20, fontWeight: 'bold', left: 150, bottom: 40}}>100NP</Text>      
            
            <View style={styles.buybotton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BuyPoints')}>
                    <Text style={styles.buytext}>Buy Points</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize: 16, color: '#263238'}}>See your progress</Text>
            <Text style={{fontSize: 10, color: '#607d8b'}}>Days you have learned!</Text>
            <Image source={require('../assets/calender.png')} />
            <View style={styles.card1}>
                <View style={{left: 230, top: 20}}>
                    <Image source={require('../assets/monkey.png')}/>
                </View>
                <Text style={{fontSize: 34, fontWeight: 'bold', color: '#18191f', bottom: 90, left: 15}}>Buy new pets & assistants!</Text>
                <View style={styles.botton1}>              
                    <TouchableOpacity onPress={()=> navigation.navigate('Assistant')}>
                        <Text style={{fontSize: 12, color: '#fff', fontWeight: 'bold', top: 10, textAlign: 'center'}}>Go!</Text>
                   </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card2}>
                <View style={{left: 230, top: 50}}>
                    <Image source={require('../assets/treasure.png')} />
                </View>
                <Text style={{fontSize: 34, fontWeight: 'bold', color: '#141415', bottom: 50, left: 15}}>Claim cool perks with points</Text>
                <View style={styles.botton2}>
                    <Text style={{color: '#fff', top: 7, textAlign: 'center'}}>Claim</Text>
                </View>
            </View>
        </View>  
    );  
    }
 }

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
         flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center'  
    }, 
    home: {
        fontWeight: 'bold',
        fontSize: 44,
        right: 130,
    },
    buybotton:{
        width: 100,
        height: 22,
        borderRadius: 16,
        backgroundColor: '#DC7515',
        left: 150,
        bottom: 35
    },
    buytext: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
    },
    card1: {
        backgroundColor: '#ffbd12',
        width: 327,
        height: 154,
        borderRadius: 16,
    },
    botton1: {
        width: 53,
        height: 36,
        borderRadius: 12,
        backgroundColor: '#18191f',
        bottom: 80,
        left: 15
    },
    botton2: {
        width: 53,
        height: 36,
        borderRadius: 12,
        backgroundColor: '#18191f',
        bottom: 40,
        left: 15
    },
    card2: {
        backgroundColor: '#cf26d2',
        width: 327,
        height: 156,
        borderRadius: 16,
        top: 20
    }
});  



