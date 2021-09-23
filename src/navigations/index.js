import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import React, { useContext, useState } from "react";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import { useEffect } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavContainer = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { authState: { isLoggedIn } } = useContext(GlobalContext);

    const getUser = async () => {
        try {
            await AsyncStorage.getItem("user");
            if (user) setIsAuthenticated(true);
            else setIsAuthenticated(false);
        } catch (error) { }
    }

    useEffect(() => {
        getUser();
        return () => {
            console.log("cleanup in navigations/index.js after getting authenticated user.")
        }
    }, [])

    return (
        <NavigationContainer>
            {(isLoggedIn || isAuthenticated) ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavContainer;