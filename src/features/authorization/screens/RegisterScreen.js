import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button } from "react-native";

export default function RegisterScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Image style={styles.registerImage} source={require("../../../../assets/register-icon.png")} />
            <View style={styles.card}>
                <Text style={styles.titleText}>Register</Text>
                <Text style={styles.subtext}>
                    Register to start your journey towards an amazing life :)
                </Text>
                <View style={styles.emailButton}>
                    <Button
                        color="white"
                        title="Email"
                        onPress={() => navigation.push("SignUpScreen")}
                    />
                </View>
                <View style={styles.facebookButton} >
                    <Button
                        color="white"
                        title="Facebook"
                        // onPress={() => navigation.push("SignUpScreen")}
                    />
                </View>
                <View style={styles.googleButton} >
                    <Button
                        color="black"
                        title="Google"
                        // onPress={() => navigation.push("SignUpScreen")}
                    />
                </View>
                <View style={styles.space}>
                    <Button
                        color="black"
                        title="Already have an account? Go here"
                        onPress={() => navigation.push("LoginScreen")}
                    />
                </View>
            </View>

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
    space: {
        width: "100%",
        height: "40%",
        top: "80%",
    },
    registerImage: {
        width: "100%",
        height: "80%",
        position: "absolute",
        top: 0
    },
    card: {
        backgroundColor: '#fff',
        position: "absolute",
        width: "100%",
        height: "50%",
        top: "50%",
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        borderWidth: 2
    },
    titleText: {
        position: "absolute",
        width: '100%',
        height: 80,
        // left: 0,
        top: "5%",
        color: '#000000',
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 36,
        lineHeight: 40,
        textAlign: "center"
    },
    subtext: {
        position: "absolute",
        width: '60%',
        height: 80,
        top: "15%",
        color: '#000000',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 28,
        marginLeft: '20%',
        textAlign: "center"
    },
    emailButton: {
        position: "absolute",
        width: '60%',
        height: 60,
        top: "30%",
        backgroundColor: '#18191F',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 28,
        marginLeft: '20%',
        textAlign: "center",
        borderRadius: 16
    },
    googleButton: {
        position: "absolute",
        width: '60%',
        height: 60,
        top: "60%",
        backgroundColor: '#fff',
        // fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 28,
        marginLeft: '20%',
        textAlign: "center",
        borderRadius: 16,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 2
    },
    facebookButton: {
        position: "absolute",
        width: '60%',
        height: 60,
        top: "45%",
        backgroundColor: '#1947E5',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 28,
        marginLeft: '20%',
        textAlign: "center",
        borderRadius: 16
    },

});