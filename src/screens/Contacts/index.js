import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import IconComponent from "../../components/Common/Icons";

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
                    <IconComponent type="material" style={{ padding: 10 }} name="menu" size={25} />
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