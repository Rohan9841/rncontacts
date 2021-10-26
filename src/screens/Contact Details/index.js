import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import IconComponent from '../../components/Common/Icons';
import colors from '../../assets/theme/colors';
import styles from './styles';
import { GlobalContext } from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import { navigate } from '../../navigations/SideMenu/RootNavigator';
import { CONTACT_LIST } from '../../constants/routeNames';
import editContact from '../../context/actions/contacts/editContact';
import uploadImage from '../../helpers/uploadImage';

const ContactDetails = () => {
    const { params } = useRoute();
    const { setOptions } = useNavigation();

    const { contactsDispatch, contactsState: { deleteContact: { loading } } } = useContext(GlobalContext);

    const sheetRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [updatingImage, setUpdatingImage] = useState(false);
    const [uploadSucceeded, setUploadSucceeded] = useState(false);

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    }

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    }

    const onFileSelected = (image) => {
        // console.log("selecte image from contactDetailsComponent line 39", image)
        closeSheet();
        setSelectedImage(image);
        setUpdatingImage(true);

        uploadImage(image)(
            (url) => {
                setUpdatingImage(false);
                const {
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    is_favorite: isFavorite,
                    country_code: phoneCode
                } = params.item;
                editContact({
                    firstName,
                    lastName,
                    phoneNumber,
                    isFavorite,
                    phoneCode,
                    contactPicture: url
                },
                    params.item.id)(contactsDispatch)((item) => {
                        // navigate(CONTACT_DETAIL, { item })
                        setUpdatingImage(false);
                        setUploadSucceeded(true);
                    });
            })
            (
                (error) => {
                    console.log("error in screen/contactDetails:", error);
                    setUpdatingImage(false);
                }
            );
    }

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
            openSheet={openSheet}
            sheetRef={sheetRef}
            selectedImage={selectedImage}
            onFileSelected={onFileSelected}
            updatingImage={updatingImage}
            uploadSucceeded={uploadSucceeded}
        />
    )
}

export default ContactDetails;