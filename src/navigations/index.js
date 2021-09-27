import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import React, { useContext, useState } from "react";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import { useEffect } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeNavigator from "./HomeNavigator";
import { ActivityIndicator } from "react-native";

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

    return (
        <>
            {authLoaded ?
                <NavigationContainer>
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