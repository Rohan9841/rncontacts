import { useContext } from "react";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import logoutUser from "../../context/actions/auth/logoutUser";
import { GlobalContext } from "../../context/Provider";
import React from "react";

const Logout = () => {

    const { authDispatch } = useContext(GlobalContext);

    useEffect(() => {
        logoutUser()(authDispatch);
        return () => {
            console.log("cleanup in logout/index.js")
        }
    }, [])

    return (
        <ActivityIndicator />
    );
}

export default Logout;