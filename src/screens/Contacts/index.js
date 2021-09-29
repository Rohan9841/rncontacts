import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import IconComponent from "../../components/Common/Icons";
import ContactComponent from "../../components/ContactsComponent";

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

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
        <ContactComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
        />
    )
}

export default Contacts;