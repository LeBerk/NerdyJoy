import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button } from "react-native";

export default function SignUpScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
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
});