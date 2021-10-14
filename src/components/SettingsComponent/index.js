import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import AppModalComponent from "../Common/AppModal";
import IconComponent from "../Common/Icons";

const SettingsComponent = ({
    settingsOptions,
    modalVisible,
    setModalVisible,
    prefArr
}) => {

    return (
        <>
            <ScrollView style={styles.container}>
                {settingsOptions.map(({ title, subTitle, onPress }) => (
                    <TouchableOpacity
                        key={title}
                        onPress={onPress}
                    >
                        <View style={styles.individualContainer}>
                            <Text style={styles.title}>{title}</Text>
                            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                        </View>
                        <View style={styles.separator} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <AppModalComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                modalTitle="Sort by"
                modalBody={
                    <View>
                        {prefArr.map(({ name, selected, onPress }) => (
                            <View>
                                <TouchableOpacity
                                    key={name}
                                    onPress={onPress}
                                    style={styles.sortElements}
                                >
                                    {selected && <IconComponent name="check" type="ant" size={17} />}
                                    <Text
                                        style={[
                                            styles.sortText,
                                            { paddingLeft: selected ? 15 : 30 }
                                        ]}>{name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                }
                modalFooter={<></>}
            />
        </>
    );
}

export default SettingsComponent;

