import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import CreateContactComponent from "../../components/CreateContactComponent";
import createContact from "../../context/actions/contacts/createContact";
import { GlobalContext } from "../../context/Provider";
import { CONTACT_LIST } from "../../constants/routeNames";

const CreateContact = () => {

    const [form, setForm] = useState({});

    const {
        contactsDispatch,
        contactsState: { createContact: { loading, data, error } }
    } = useContext(GlobalContext)
    const { navigate } = useNavigation();

    const onChangeText = ({ name, value }) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = () => {
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST)
        });
    }

    return (
        <CreateContactComponent
            form={form}
            setForm={setForm}
            onChangeText={onChangeText}
            onSubmit={onSubmit}
            onPress={onSubmit}
            loading={loading}
            error={error}
        />
    )
}

export default CreateContact;