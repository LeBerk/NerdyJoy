import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button } from "react-native";

export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <Text>log in</Text>
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