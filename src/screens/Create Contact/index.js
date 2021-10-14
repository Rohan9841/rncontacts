import { useNavigation } from "@react-navigation/core";
import React, { useContext, useRef, useState } from "react";
import CreateContactComponent from "../../components/CreateContactComponent";
import createContact from "../../context/actions/contacts/createContact";
import { GlobalContext } from "../../context/Provider";
import { CONTACT_LIST } from "../../constants/routeNames";
import uploadImage from "../../helpers/uploadImage";

const CreateContact = () => {

    const [form, setForm] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const {
        contactsDispatch,
        contactsState: { createContact: { loading, data, error } }
    } = useContext(GlobalContext)
    const { navigate } = useNavigation();
    const sheetRef = useRef(null);

    const onChangeText = ({ name, value }) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = () => {
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
        }
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST)
        });
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