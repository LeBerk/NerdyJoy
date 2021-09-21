import React, {Component} from 'react';  
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import flatListData from '../buypoints/FlatListData';

class FlatListItem extends Component {
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
                            <Text style={{fontWeight: 'bold', color: '#fff', textAlign: 'center', top: 2}}>Buy!</Text>
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

export default function BuyScreen() {
    return (  
        <View style={styles.container}>
            <Icon size={30} name={'leftcircleo'} style={{top: 30, left: 10}}/>      
            <Text style={styles.textfeature}>Features</Text>
            <FlatList 
                data={flatListData}
                renderItem={({item, index}) => {
                    return(
                        <FlatListItem item={item} index={index}>

                        </FlatListItem>
                    );
                }}
            >

            </FlatList>
        </View>  
        );  
    }


const styles = StyleSheet.create({  
    textfeature: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#18191F',
    },
    buy1: {
        height: 22,
        width: 51,
        borderRadius: 12,
        backgroundColor: '#D96E21',
        left: 30,
        top: 10
    },
    price: {
        fontWeight: 'bold',
        fontSize: 25,
        top: 20
    },
    price1: {
       top: 30 
    }
});  


