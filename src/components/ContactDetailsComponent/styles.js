import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        height: 300,
        width: "100%",
    },
    detailPhoto: {
        height: 300,
        width: "100%",
        resizeMode: "cover"
    },
    loading: {
        paddingLeft: "35%",
        paddingTop: "5%"
    },
    nameContainer: {
        padding: 20
    },
    names: {
        fontSize: 23
    },
    hrLine: {
        height: 10,
        borderColor: colors.grey,
        borderWidth: 0.4
    },
    topCallOptionsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    topCallOption: {
        alignItems: "center"
    },
    middleText: {
        fontSize: 14,
        color: colors.primary,
        paddingVertical: 5
    },
    middleCallOptionsContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    phoneMobile: {
        flexGrow: 1,
        paddingHorizontal: 20
    },
    middleOptions: {
        flexDirection: "row",
        alignItems: "center",
    },
    editButton: {
        alignSelf: "flex-end",
        width: 256,
        marginRight: 20
    }
})