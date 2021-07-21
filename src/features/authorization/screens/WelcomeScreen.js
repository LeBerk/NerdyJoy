import { NavigationContainer } from '@react-navigation/native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.background}
        // source={require("../assets/background.jpg")}
        >
            <Image style={styles.onboardingImage} source={require("../../../../assets/onboarding-image.png")} />
            <Text style={styles.welcomeText}> Ready to live an amazing life?</Text>
            <Text style={styles.welcomeSubtext}> Get short & easy to understand lessons to succeed with your goals!</Text>
            <View style={styles.loginButton}>
                <Button
                    color="white"
                    fontSize="100%"
                    title="Get Started"
                    // textStyle={{ fontFamily: Fonts.Montserrat }}
                    onPress={() => navigation.push("RegisterScreen")}
                />
            </View>
            <Text style={styles.welcomeSubtext2}>
                Visit nerdyjoy.com for more info</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#FF7F22',
        // flex: none;
        // order: 0;
        // flex-grow: 0;
        // margin: 24px 0px;
    },
    welcomeText: {
        position: "absolute",
        width: '90%',
        height: 80,
        // left: 0,
        top: 440,
        color: '#F4F5F7',
        // fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 36,
        lineHeight: 40,
        textAlign: "center"
    },
    welcomeSubtext: {
        position: "absolute",
        width: '80%',
        height: 80,
        top: 562,
        color: '#F4F5F7',
        // fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 28,
        textAlign: "center"
    },
    welcomeSubtext2: {
        position: "absolute",
        width: '80%',
        height: 80,
        top: 800,
        color: '#F4F5F7',
        // fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 28,
        textAlign: "center"
    },
    loginButton: {
        position: "absolute",
        width: '80%',
        height: 70,
        backgroundColor: '#18191F',
        borderRadius: 16,
        top: 700,
        // fontFamily: "Montserrat",
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 40,
        lineHeight: 50
    },
    onboardingImage: {
        width: 300,
        height: 300,
        position: "absolute",
        top: 100,

    }
})

export default WelcomeScreen;
