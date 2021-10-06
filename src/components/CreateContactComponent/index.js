import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';
import Container from '../Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import { DEFAULT_IMAGE_URI } from "../../constants/defaultImage";

const CreateContactComponent = (props) => {

    const {
        form,
        setForm,
        onChangeText,
        onSubmit,
        loading,
        error
    } = props;

    console.log("error: ", error)
    return (
        <View style={styles.container}>
            <Container>
                <Image
                    source={{ uri: DEFAULT_IMAGE_URI }}
                    style={styles.imageView}
                />
                <Text style={styles.chooseText}>Choose Image</Text>
                <Input
                    label="First Name"
                    placeholder="Enter First Name"
                    onChangeText={(value) => {
                        onChangeText({ name: "firstName", value: value })
                    }}
                    error={error?.first_name?.[0]}
                />
                <Input
                    label="Last Name"
                    placeholder="Enter Last Name"
                    onChangeText={(value) => {
                        onChangeText({ name: "lastName", value: value })
                    }}
                    error={error?.last_name?.[0]}
                />
                <Input
                    icon={
                        <CountryPicker
                            withFilter
                            withFlag
                            countryCode={form?.countryCode}
                            withCountryNameButton={false}
                            withCallingCode
                            withCallingCodeButton
                            withEmoji
                            onSelect={(value) => {
                                const phoneCode = value.callingCode[0];
                                const cCode = value.cca2;
                                setForm({
                                    ...form,
                                    countryCode: cCode,
                                    phoneCode: phoneCode
                                })
                            }}
                        />
                    }
                    label="Phone Name"
                    placeholder="Enter Phone Number"
                    inputStyle={{ paddingLeft: 10 }}
                    onChangeText={(value) => {
                        onChangeText({ name: "phoneNumber", value: value })
                    }}
                    error={error?.phone_number?.[0] || error?.country_code?.[0]}
                />

                <CustomButton
                    primary
                    title={loading ? "Submitting, please wait..." : "Submit"}
                    onPress={onSubmit}
                    disabled={loading}
                    loading={loading}
                />
            </Container>
        </View>
    );
}

export default CreateContactComponent;