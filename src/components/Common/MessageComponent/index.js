import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import colors from '../../../assets/theme/colors';
import styles from "./styles";

const MessageComponent = ({ message, retry, retryFn, onDismiss, info, primary, danger, success }) => {

    const getBgColor = () => {
        if (primary) return colors.primary;
        if (info) return colors.secondary;
        if (danger) return colors.danger;
        if (success) return colors.success;
    }

    const [userDismissed, setUserDismissed] = useState(false);

    return (
        <>
            {userDismissed ? null :
                <TouchableOpacity
                    style={[
                        styles.wrapper,
                        { backgroundColor: getBgColor() }
                    ]}>
                    <View style={[
                        { flexDirection: "row" },
                        { justifyContent: "space-between" }
                    ]}>
                        <Text style={{ color: colors.white }}>
                            {message}
                        </Text>
                        {retry && typeof onDismiss !== "function" && (
                            <TouchableOpacity onPress={retryFn}>
                                <Text style={{ color: colors.white }}>
                                    Retry
                                </Text>
                            </TouchableOpacity>
                        )}
                        {typeof onDismiss === "function" &&
                            <TouchableOpacity
                                onPress={() => {
                                    setUserDismissed(true)
                                    onDismiss
                                }}>
                                <Text style={{ color: colors.white }}>
                                    X
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                </TouchableOpacity >
            }
        </>
    );
}

export default MessageComponent;