// import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/theme/colors";

export default ScaledSheet.create({
    logoImage: {
        height: "150@s",
        width: "150@s",
        alignSelf: 'center',
        marginTop: "50@s",
    },
    title: {
        fontSize: "21@s",
        textAlign: 'center',
        paddingTop: "20@s",
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500'
    },
    form: {
        paddingTop: 20
    },
    createSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoText: {
        fontSize: 17
    },
    linkButton: {
        fontSize: 16,
        paddingLeft: 17,
        color: colors.primary
    }
})