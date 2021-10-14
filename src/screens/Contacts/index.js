import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import IconComponent from "../../components/Common/Icons";
import ContactComponent from "../../components/ContactsComponent";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(null);

    const {
        contactsDispatch,
        contactsState: { getContacts: { data, loading } }
    } = useContext(GlobalContext);

    const getSettings = async () => {
        const sortPref = await AsyncStorage.getItem("sortBy");
        sortPref && setSortBy(sortPref);
        console.log(sortPref);
    }

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
            console.log('cleanup in screens/Contacts/index.js at component load')
        }
    }, [])

    useFocusEffect(useCallback(
        () => {
            getSettings();
            return () => { console.log("cleanup in screens/contacts/index.js after useFocusEffect") }
        },
        [],
    ))
    return (
        <ContactComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            loading={loading}
            sortBy={sortBy}
        />
    )
}

export default Contacts;