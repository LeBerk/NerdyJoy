import React, {Component} from 'react';  
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatureData from '../buypoints/FeatureData';

class FeatureListItem extends Component {
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
                    <View style={styles.buy1}>
                        <TouchableOpacity>
                            <Text style={{fontWeight: 'bold', color: '#fff', textAlign: 'center', top: 9}}>Unlock for 1,000 NP</Text>
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

export default function FeatureScreen() {
    return (  
        <View style={styles.container}>
            <Icon size={30} name={'leftcircleo'} style={{top: 28}}/>      
            <Text style={styles.textfeature}>Features</Text>
            <FlatList 
                data={FeatureData}
                renderItem={({item, index}) => {
                    return(
                        <FeatureListItem item={item} index={index}>

                        </FeatureListItem>
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
        height: 36,
        width: 160,
        borderRadius: 12,
        backgroundColor: '#D96E21',
        left: 30,
        top: 25
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


