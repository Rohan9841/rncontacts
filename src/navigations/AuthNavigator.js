import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Register from '../screens/Register';
import React from 'react';
import { LOGIN, REGISTER } from '../constants/routeNames';

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;