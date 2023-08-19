import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    Image,
} from 'react-native';


const Login = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1, width: Dimensions.get('window').width }} source={require('../assets/layered-waves-2.png')}>
                <View style={styles.subContainer}>
                    <Image style={{ width: 150, height: 150 }} source={require('../assets/logo.png')} />
                    <Text style={styles.header}>ExpenseBuddy</Text>
                    <TextInput keyboardType="email-address" style={styles.input} placeholder='Email'/>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' />
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => { }}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: "center",
        alignItems: "center",
    },
    input : {
        height: 50,
        width: Dimensions.get('window').width - 60,
        borderColor: "gray",
        borderWidth: 0,
        borderBottomWidth : 1,
        borderRadius: 10,
        padding: 10,
        marginBottom : 20
    },
    subContainer: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center'
    },
    header: {
        marginBottom: 40,
        fontWeight: 600,
        fontFamily: 'Montserrat_600',
        fontSize: 18,
        color: 'rgba(0,0,0,0.6)',
    },
    button: {
        backgroundColor: "#5170ff",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 10,
        width: Dimensions.get('window').width - 60,
        marginBottom: 30,
        height: 50
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontFamily: 'Montserrat_400',
        color: 'white',
        fontWeight: 'bold'
    },
});
export default Login;