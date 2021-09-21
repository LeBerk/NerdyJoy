import React, {useState} from 'react';  
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
 
 const Lessons = props => {
   
 return (  
    <View style={styles.container}>       
       <Text style={styles.DailyLessons}>Daily Lesson </Text> 
       <View style={styles.LessonContainer}>
        <Text style={styles.LessonName}>How to make money in the stock market</Text>
            <View style={styles.Button}>
                <Text style={{left: 15, top: 8, fontWeight: 'bold', fontSize: 18}}>Read</Text>
            </View>
            <Text style={{top: 150, left: 20, fontSize: 17, fontWeight: 'bold'}}>Berk LEE</Text>
            <Text style={{top: 150, left: 20, fontSize: 13}}>30 March, 20</Text>
       </View>      
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
    DailyLessons: {
        fontSize: 44,
        fontWeight: 'bold'
    },
    LessonContainer: {
        backgroundColor: '#FFF3F8',
        borderRadius: 16,
        width: 327,
        height: 396
    },
    LessonName: {
        fontSize: 50,
        fontWeight: 'bold',
        left: 40,
        top: 100,
    },
    Button: {
        backgroundColor: '#FFBD12',
        height: 36,
        width: 65,
        borderRadius: 12,
        top: 180,
        left: 225
    }
});  

export default Lessons;


