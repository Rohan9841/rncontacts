import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/Contact Details';
import CreateContact from '../screens/Create Contact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;