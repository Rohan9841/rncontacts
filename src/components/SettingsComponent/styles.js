import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    individualContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    title: {
        fontSize: 17
    },
    subTitle: {
        fontSize: 14,
        paddingTop: 5,
        opacity: 0.6
    },
    separator: {
        height: 0.5,
        backgroundColor: colors.grey
    },
    sortElements: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    sortText: {
        fontSize: 17,
        paddingLeft: 15
    }
})