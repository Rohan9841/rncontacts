import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import CreateContactComponent from "../../components/CreateContactComponent";
import createContact from "../../context/actions/contacts/createContact";
import { GlobalContext } from "../../context/Provider";
import { CONTACT_DETAIL, CONTACT_LIST } from "../../constants/routeNames";
import uploadImage from "../../helpers/uploadImage";
import countryCodes from "../../utils/countryCodes";
import editContact from "../../context/actions/contacts/editContact";

const CreateContact = () => {

    const [form, setForm] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const {
        contactsDispatch,
        contactsState: { createContact: { loading, data, error } }
    } = useContext(GlobalContext)
    const { navigate, setOptions } = useNavigation();
    const sheetRef = useRef(null);
    const params = useRoute();

    const onChangeText = ({ name, value }) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = () => {
        console.log("selected Image:", selectedImage);

        if (params?.params?.contact) {
            if (selectedImage?.size) {
                setUploading(true);
                uploadImage(selectedImage)(
                    (url) => {
                        setUploading(false);
                        editContact({ ...form, contactPicture: url }, params.params.contact.id)(contactsDispatch)((item) => {
                            navigate(CONTACT_DETAIL, { item })
                        });
                    })
                    (
                        (error) => {
                            console.log("error:", error);
                            setUploading(false);
                        });
            } else {
                editContact(form, params.params.contact.id)(contactsDispatch)((item) => {
                    navigate(CONTACT_DETAIL, { item })
                });
            }
        } else {
            if (selectedImage?.size) {
                setUploading(true);
                uploadImage(selectedImage)(
                    (url) => {
                        setUploading(false);
                        createContact({ ...form, contactPicture: url })(contactsDispatch)(() => {
                            navigate(CONTACT_LIST)
                        });
                    })
                    (
                        (error) => {
                            console.log("error:", error);
                            setUploading(false);
                        });
            } else {
                createContact(form)(contactsDispatch)(() => {
                    navigate(CONTACT_LIST)
                });
            }
        }
    }

    const toggleSwitch = () => {
        setForm({
            ...form,
            isFavorite: !form.isFavorite
        })
    }

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
        closeSheet();
        setSelectedImage(image);
        console.log("image", image);
    }

    console.log("params", params?.params?.contact);
    console.log("selected image", selectedImage);
    useEffect(() => {
        if (params?.params?.contact) {

            setOptions({
                title: "Update Contact"
            });

            const {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                is_favorite: isFavorite,
                country_code: countryCode
            } = params.params.contact;

            setForm((prev) => {
                return {
                    ...prev,
                    firstName,
                    lastName,
                    phoneNumber,
                    isFavorite,
                    phoneCode: countryCode
                }
            });

            if (params.params.contact.contact_picture) {
                setSelectedImage(params.params.contact.contact_picture);
            }

            const country = countryCodes.find(item => {
                return item.value.replace("+", "") === countryCode;
            })

            if (country) {
                setForm(prev => {
                    return {
                        ...prev,
                        countryCode: country.key.toUpperCase()
                    }
                })
            }
        }
        return () => {
            console.log("cleanup in screens/create contact/index.js after params change.")
        }
    }, [params])
    return (
        <CreateContactComponent
            form={form}
            setForm={setForm}
            onChangeText={onChangeText}
            onSubmit={onSubmit}
            onPress={onSubmit}
            loading={loading || uploading}
            error={error}
            toggleSwitch={toggleSwitch}
            sheetRef={sheetRef}
            openSheet={openSheet}
            onFileSelected={onFileSelected}
            selectedImage={selectedImage}
        />
    )
}

export default CreateContact;