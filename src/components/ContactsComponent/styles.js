import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white
    },
    flatList: {
        paddingVertical: 20
    },
    defaultPadding: {
        paddingVertical: 100,
        paddingHorizontal: 100
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },
    item: {
        flexDirection: "row",
        alignItems: "center"
    },
    infoContainer: {
        paddingLeft: 10
    },
    nameContainer: {
        flexDirection: "row",
    },
    name: {
        fontSize: 17
    },
    phoneNumber: {
        opacity: 0.6,
        fontSize: 14,
        paddingVertical: 5
    },
    contact_picture: {
        width: 45,
        height: 45,
        borderRadius: 100
    },
    no_contact_picture: {
        width: 45,
        height: 45,
        backgroundColor: colors.grey,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    floatingActionButton: {
        backgroundColor: "red",
        width: 55,
        height: 55,
        position: "absolute",
        bottom: 45,
        right: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})