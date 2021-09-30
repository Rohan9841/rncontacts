import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';
import Container from '../Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import { DEFAULT_IMAGE_URI } from "../../constants/defaultImage";

const CreateContactComponent = () => {
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
                />
                <Input
                    label="Last Name"
                    placeholder="Enter Last Name"
                />
                <Input
                    icon={
                        <CountryPicker
                            withFilter
                            withFlag
                            withCountryNameButton={false}
                            withCallingCode
                            withEmoji
                            onSelect={() => { }}
                        />
                    }
                    label="Phone Name"
                    placeholder="Enter Phone Number"
                    inputStyle={{ paddingLeft: 10 }}
                />

                <CustomButton
                    primary
                    title="Submit"
                />
            </Container>
        </View>
    );
}

export default CreateContactComponent;