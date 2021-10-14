import { Text, View } from 'react-native';
import React from 'react';
import SettingsComponent from '../../components/SettingsComponent';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const Settings = () => {
    const [email, setEmail] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(null);

    const settingsOptions = [
        { title: "My Info", subTitle: "Setup you profile", onPress: () => { } },
        { title: "Accounts", subTitle: null, onPress: () => { } },
        { title: "Default account for new contacts", subTitle: email, onPress: () => { } },
        { title: "Contacts to display", subTitle: "All contacts", onPress: () => { } },
        { title: "Sort by", subTitle: sortBy, onPress: () => { setModalVisible(true) } },
        { title: "Name format", subTitle: "First Name first", onPress: () => { } },
        { title: "Import", subTitle: null, onPress: () => { } },
        { title: "Export", subTitle: null, onPress: () => { } },
        { title: "Blocked numbers", subTitle: null, onPress: () => { } },
        { title: "About RNContacts", subTitle: null, onPress: () => { } },
    ]

    const prefArr = [
        {
            name: "First Name",
            selected: sortBy === "First Name",
            onPress: () => {
                saveSetting("sortBy", "First Name");
                setSortBy("First Name");
                setModalVisible(false);
            }
        },
        {
            name: "Last Name",
            selected: sortBy === "Last Name",
            onPress: () => {
                saveSetting("sortBy", "Last Name");
                setSortBy("Last Name");
                setModalVisible(false);
            }
        }
    ]
    const getSettings = async () => {
        const user = await AsyncStorage.getItem("user");
        setEmail(JSON.parse(user).email);

        const sortPref = await AsyncStorage.getItem("sortBy");
        console.log("sortPref:", sortPref);
        sortPref && setSortBy(sortPref);
    }

    const saveSetting = (key, value) => {
        AsyncStorage.setItem(key, value);
    }

    useEffect(() => {
        getSettings();
        return () => {
            console.log("cleanup in Settings/index.js at component load.")
        }
    }, [])

    return (
        <SettingsComponent
            settingsOptions={settingsOptions}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            prefArr={prefArr}
        />
    )
}

export default Settings;