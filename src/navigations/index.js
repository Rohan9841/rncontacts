import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import React, { useContext, useState } from "react";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import { useEffect } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { navigationRef } from "./SideMenu/RootNavigator";
import SplashScreen from "react-native-splash-screen";

const AppNavContainer = () => {

    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = useState(false);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem("user");
            if (user) setIsAuthenticated(true);
            else setIsAuthenticated(false);
            setAuthLoaded(true);
        } catch (error) { }
    }

    useEffect(() => {
        getUser();
        return () => {
            console.log("cleanup in navigations/index.js after getting authenticated user.")
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (authLoaded) {
            SplashScreen.hide();
        }
        return () => {
            console.log("cleanup in navigations/index.js after authLoaded change.")
        }
    }, [authLoaded])
    return (
        <>
            {authLoaded ?
                //When we pass navigationRef to the navigationContainer, navigationRef will have all the methods that are defined in NavigationContainer.
                <NavigationContainer ref={navigationRef}>
                    {console.log("isAuthenticated:", isAuthenticated)}
                    {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                    {/* <DrawerNavigator /> */}
                    {/* <HomeNavigator /> */}
                </NavigationContainer>
                :
                <ActivityIndicator />
            }
        </>
    );
}

export default AppNavContainer;