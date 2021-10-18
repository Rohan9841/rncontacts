import { Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';

const ContactDetails = () => {
    const { params } = useRoute();

    return (
        <ContactDetailsComponent
            contact={params?.item ? params.item : {}}
        />
    )
}

export default ContactDetails;