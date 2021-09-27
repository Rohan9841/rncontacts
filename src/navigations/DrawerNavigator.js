import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator';
import React, { useContext } from 'react';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import SideMenu from './SideMenu';
import { GlobalContext } from '../context/Provider';

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();

    const { authDispatch } = useContext(GlobalContext);

    const getDrawerContent = (navigation, authDispatch) => {
        return <SideMenu navigation={navigation} authDispatch={authDispatch} />
    }
    return (
        <DrawerStack.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={({ navigation }) => getDrawerContent(navigation, authDispatch)} //drawerStack will already have a navigation props with it. So, we are just passing it.
        >
            <DrawerStack.Screen //It returns HomeNavigator which will have default route to 'CONTACT_LIST'
                name={HOME_NAVIGATOR}
                component={HomeNavigator}
            />
        </DrawerStack.Navigator>
    );
}

export default DrawerNavigator;