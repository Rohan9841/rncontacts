import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import IconComponent from "../../components/Common/Icons";
import ContactComponent from "../../components/ContactsComponent";
import { CONTACT_DETAIL } from "../../constants/routeNames";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import { navigate } from "../../navigations/SideMenu/RootNavigator";

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(null);

    //This will store our previous data. Refs can be used to store states across renders.
    //Let's say we have a ref that is storing our list of data and the component renders, it won't be updated, it will keep 
    //the previous data state there.
    const contactsRef = useRef([]);

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

    useEffect(() => {
        const prevList = contactsRef.current;
        contactsRef.current = data;
        const newList = contactsRef.current;
        if (newList.length - prevList.length === 1) {
            const newContact = newList.find(
                item => !prevList.map(i => i.id).includes(item.id)
            );
            navigate(CONTACT_DETAIL, { item: newContact });
        }
        return () => {
            console.log("Cleanup in Contacts/index.js after data change.")
        }
    }, [data.length])
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