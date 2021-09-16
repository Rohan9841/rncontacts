import React from "react";
import { View, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const Container = ({ style, children }) => {
    return (
        <ScrollView>
            <View style={[styles.wrapper, style]}>
                {children}
            </View>
        </ScrollView>
    );
}

export default Container;