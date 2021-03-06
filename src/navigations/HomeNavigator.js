import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, LOGOUT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/Contact Details';
import CreateContact from '../screens/Create Contact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST} screenOptions={{ headerTitleAlign: 'center' }}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
            <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;