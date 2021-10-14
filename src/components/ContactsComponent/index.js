import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import React from "react";
import MessageComponent from '../Common/MessageComponent';
import styles from "./styles";
import colors from "../../assets/theme/colors";
import IconComponent from "../Common/Icons";
import { useNavigation } from "@react-navigation/core";
import { CREATE_CONTACT } from '../../constants/routeNames';

const ContactComponent = ({ data, loading, sortBy }) => {

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (
            <View style={styles.defaultPadding}>
                <MessageComponent
                    info
                    message="No contacts to show"
                />
            </View>
        )
    }

    const renderItem = ({ item }) => {
        // console.log("Item:", item);
        const {
            contact_picture,
            first_name,
            last_name,
            phone_number,
            country_code
        } = item;

        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.item}>
                    {contact_picture ?
                        <Image
                            style={styles.contact_picture}
                            source={{ uri: contact_picture }}
                        />
                        :
                        <View style={styles.no_contact_picture}>
                            <Text style={[styles.name, { color: colors.white }]}>{first_name[0]}</Text>
                            <Text style={[styles.name, { color: colors.white }]}>{last_name[0]}</Text>
                        </View>
                    }
                    <View style={styles.infoContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{first_name}</Text>
                            <Text style={styles.name}> {last_name}</Text>
                        </View>
                        <Text style={styles.phoneNumber}>{`+${country_code} ${phone_number}`}</Text>
                    </View>

                </View>
                <IconComponent
                    type="ant"
                    name="right"
                    size={18}
                    color={colors.grey}
                />
            </TouchableOpacity>
        )
    }
    return (
        <>
            <View style={styles.wrapper}>
                {/* ListEmptyComponent is a component that will shown when the data is empty  */}
                {loading ?
                    <View style={styles.defaultPadding}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                    :
                    <View style={styles.flatList}>
                        <FlatList
                            renderItem={renderItem}
                            data={
                                sortBy ? data.sort((a, b) => {
                                    if (sortBy === "First Name") {
                                        if (b.first_name > a.first_name) return -1
                                        else return 1
                                    } else {
                                        if (b.last_name > a.last_name) return -1;
                                        else return 1
                                    }
                                }) : data}
                            keyExtractor={(item) => String(item.id)}
                            ListEmptyComponent={ListEmptyComponent}
                            ListFooterComponent={<View style={{ height: 100 }} />} //This is to add some space at the bottom
                            ItemSeparatorComponent={() => (
                                <View style={{ height: 0.5, backgroundColor: colors.grey }} />
                            )}
                        />
                    </View>
                }
            </View>

            <TouchableOpacity
                style={styles.floatingActionButton}
                onPress={() => { navigate(CREATE_CONTACT); }}
            >
                <IconComponent
                    type="ant"
                    name="plus"
                    size={21}
                    color={colors.white} />
            </TouchableOpacity>
        </>
    );
}

export default ContactComponent;