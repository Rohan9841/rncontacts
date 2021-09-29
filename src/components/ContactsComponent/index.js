import { Text, View } from "react-native";
import AppModalComponent from "../Common/AppModal";
import React from "react";
import CustomButton from '../Common/CustomButton';

const ContactComponent = ({ modalVisible, setModalVisible }) => {
    return (
        <View>
            <AppModalComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                modalTitle="My Profile"
                modalBody={<View><Text>Hello from the Modal!</Text></View>}
            // modalFooter={<></>}
            />
            <CustomButton
                title="Open Modal"
                secondary
                onPress={() => { setModalVisible(true) }}
            />
        </View>
    );
}

export default ContactComponent;