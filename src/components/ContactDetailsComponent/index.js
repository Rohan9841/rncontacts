import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "../../assets/theme/colors";
import { CREATE_CONTACT } from "../../constants/routeNames";
import CustomButton from "../Common/CustomButton";
import IconComponent from "../Common/Icons";
import ImageComponent from "./ImageComponent";
import styles from "./styles";

const ContactDetailsComponent = ({ contact }) => {

    const { navigate } = useNavigation();

    const {
        contact_picture,
        first_name,
        last_name,
        phone_number,
        country_code
    } = contact;

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {contact_picture && <ImageComponent src={contact_picture} />}

                <View style={styles.nameContainer}>
                    <Text style={styles.names}>{first_name + " " + last_name}</Text>
                </View>

                <View style={styles.hrLine} />

                <View style={styles.topCallOptionsContainer}>
                    <TouchableOpacity style={styles.topCallOption}>
                        <IconComponent name="call-outline" type="ionic" color={colors.primary} size={27} />
                        <Text style={styles.middleText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <IconComponent name="message" type="material" color={colors.primary} size={27} />
                        <Text style={styles.middleText}>Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <IconComponent name="video" type="foundation" color={colors.primary} size={27} />
                        <Text style={styles.middleText}>Video</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleCallOptionsContainer}>
                    <IconComponent name="call-outline" type="ionic" color={colors.primary} size={27} />
                    <View style={styles.phoneMobile}>
                        <Text>{phone_number}</Text>
                        <Text>Mobile</Text>
                    </View>
                    <View style={styles.middleOptions}>
                        <IconComponent name="video" type="foundation" color={colors.primary} size={27} />
                        <IconComponent name="message" type="material" color={colors.primary} size={27} />
                    </View>
                </View>

                <CustomButton
                    style={styles.editButton}
                    title="Edit Contact"
                    primary
                    onPress={() => {
                        navigate(CREATE_CONTACT, { contact, editing: true })
                    }}

                />
            </View>
        </ScrollView>
    );
}

export default ContactDetailsComponent;