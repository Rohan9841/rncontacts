import React, { useState } from 'react';
import { Text, TextInput, View } from "react-native";
import colors from '../../../assets/theme/colors';
import styles from "./styles";

const Input = ({ onChangeText, iconPosition, icon, style, value, label, error, ...props }) => {

    const [focused, setFocused] = useState(false);

    const getFlexDirection = () => {
        if (iconPosition && iconPosition === "right") return "row-reverse";
        return "row";
    }

    const getBorderColor = () => {
        if (focused) return colors.primary;
        if (error) return colors.danger;
        return colors.grey;
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

            <View
                style={[
                    styles.wrapper,
                    { borderColor: getBorderColor() },
                    { flexDirection: getFlexDirection() }
                ]}>
                <View>{icon && icon}</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

export default Input;