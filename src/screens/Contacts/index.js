import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();

    useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        toggleDrawer();
                    }}
                >
                    <Text style={{ padding: 10 }}>Navig</Text>
                </TouchableOpacity>

            )
        })
        return () => {
            console.log('cleanup in Contacts/index.js at component load')
        }
    }, [])

    return (
        <Container>
            <Text>Hi, this is contact Page</Text>
        </Container>
    )
}

export default Contacts;