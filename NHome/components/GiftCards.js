import React, {Component} from 'react';  
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import GiftListData from '../buypoints/GiftcardsData';

class GiftCardsListItem extends Component {
    render() {
        return(
        <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    source={{uri: this.props.item.image}}
                    style={{width: 100, height: 100, margin: 5}}
                />
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.price}>{this.props.item.name}</Text>
                    <Text style={styles.price1}>{this.props.item.description}</Text>
                    <View style={styles.buy1}>
                        <TouchableOpacity>
                            <Text style={{fontWeight: 'bold', color: '#fff', textAlign: 'center', top: 5}}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
           <View style={{height: 1, backgroundColor: 'black'}}>

           </View>
        </View> 
        );
    }
}

export default function GiftcardsScreen() {
    return (  
        <View style={styles.container}>
            <Icon size={30} name={'leftcircleo'} style={{top: 28}}/>      
            <Text style={styles.textfeature}>Giftcards</Text>
            <FlatList 
                data={GiftListData}
                renderItem={({item, index}) => {
                    return(
                        <GiftCardsListItem item={item} index={index}>

                        </GiftCardsListItem>
                    );
                }}
            >

            </FlatList>
        </View>  
        );  
    }


const styles = StyleSheet.create({  
    textfeature: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#18191F',
    },
    buy1: {
        height: 30,
        width: 78,
        borderRadius: 12,
        backgroundColor: '#D96E21',
        top: 10
    },
    price: {
        fontSize: 18,
        top: 10
    },
    price1: {
       top: 10,
       fontSize: 25,
       fontWeight: 'bold',
    }
});  


