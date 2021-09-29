import { Modal, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import IconComponent from "../Icons";

const AppModalComponent = ({ modalVisible, setModalVisible, modalTitle, modalBody, modalFooter }) => {
    return (
        <Modal visible={modalVisible} transparent>
            <TouchableOpacity
                style={styles.wrapper}
                onPress={() => { setModalVisible(false) }}
            >
                <View style={styles.modalView}>
                    <ScrollView>
                        <View style={styles.header}>
                            <IconComponent
                                size={27}
                                type="evil"
                                name="close" />
                            <Text style={styles.title}>{modalTitle || "RNContacts"}</Text>
                            {/* This view is a hack for space-between in the styles.header to center the text. */}
                            {/* <View /> */}
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.body}>
                            {modalBody}
                        </View>

                        <View style={styles.separator} />
                        {modalFooter ||
                            <View>
                                <View style={styles.footerItems}>
                                    <View style={styles.footer}>
                                        <Text style={styles.footerText}> Privacy Policy</Text>
                                        <Text style={styles.termsView} />
                                        <Text style={styles.footerText}>Terms of Service</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    </ScrollView>
                </View>
            </TouchableOpacity>

        </Modal>
    );
}

export default AppModalComponent;