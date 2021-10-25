import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import IconComponent from '../../components/Common/Icons';
import colors from '../../assets/theme/colors';
import styles from './styles';
import { GlobalContext } from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import { navigate } from '../../navigations/SideMenu/RootNavigator';
import { CONTACT_LIST } from '../../constants/routeNames';

const ContactDetails = () => {
    const { params } = useRoute();
    const { setOptions } = useNavigation();

    const { contactsDispatch, contactsState: { deleteContact: { loading } } } = useContext(GlobalContext);

    const handleDelete = (id) => {
        Alert.alert(
            "Delete!",
            "Are you sure you want to delete this user?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                },
                {
                    text: "Ok",
                    onPress: () => {
                        deleteContact(id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST);
                        })
                    }
                }
            ]
        )
    }
    useEffect(() => {
        if (params?.item) {
            const item = params.item;
            console.log(item);
            setOptions({
                title: item.first_name + " " + item.last_name,
                headerRight: () => {
                    return (
                        <View style={styles.headerRight}>
                            <TouchableOpacity>
                                <IconComponent name={item.is_favorite ? "star" : "star-border"} type="material" size={21} color={colors.grey} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.headerOption}
                                onPress={() => handleDelete(item.id)}>
                                {loading
                                    ? <ActivityIndicator color={colors.primary} size="small" />
                                    : <IconComponent name="delete" type="material" size={21} color={colors.grey} />
                                }
                            </TouchableOpacity>
                        </View>
                    )
                }
            })
        }
        return () => {
            console.log("cleanup in Contact Details/index.js at component load.")
        }
    }, [params?.item, loading])

    return (
        <ContactDetailsComponent
            contact={params?.item ? params.item : {}}
        />
    )
}

export default ContactDetails;