import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'
import { AuthWelcome, Login, Signup } from '../screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthenticationContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Montserrat_500'
                }
            }} initialRouteName="AuthWelcome">
                <Stack.Screen

                    name="AuthWelcome"
                    component={AuthWelcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default AuthenticationContainer