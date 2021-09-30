import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import IconComponent from "../../components/Common/Icons";
import ContactComponent from "../../components/ContactsComponent";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const {
        contactsDispatch,
        contactsState: { getContacts: { data, loading } }
    } = useContext(GlobalContext);

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

        getContacts()(contactsDispatch);

        return () => {
            console.log('cleanup in Contacts/index.js at component load')
        }
    }, [])

    return (
        <ContactComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            loading={loading}
        />
    )
}

export default Contacts;