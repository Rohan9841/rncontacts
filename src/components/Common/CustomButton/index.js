import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import colors from '../../../assets/theme/colors';
import styles from "./styles";

const CustomButton = ({ title, primary, secondary, danger, loading, disabled, onPress }) => {

    const getBgColor = () => {
        if (disabled) return colors.grey;
        if (primary) return colors.primary;
        if (secondary) return colors.secondary;
        if (danger) return colors.danger;
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.wrapper,
                { backgroundColor: getBgColor() }
            ]}>
            <View style={[styles.loaderSection]}>
                {loading &&
                    <ActivityIndicator
                        color={primary ? colors.secondary : colors.primary}
                    />}
                {title &&
                    <Text
                        style={[
                            { color: disabled ? colors.black : colors.white },
                            { paddingLeft: loading ? 5 : 0 }
                        ]}>
                        {title}
                    </Text>
                }
            </View>
        </TouchableOpacity>
    );
}

export default CustomButton;