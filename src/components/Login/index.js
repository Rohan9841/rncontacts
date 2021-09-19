import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Common/Input';
import CustomButton from '../../components/Common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { REGISTER } from '../../constants/routeNames';

const LoginComponent = () => {
    const { navigate } = useNavigation();

    return (
        <Container>
            <Image
                height={70}
                width={70}
                source={require('../../assets/images/logo.png')}
                style={styles.logoImage}
            />

            <View>
                <Text style={styles.title}> Welcome to RNContacts</Text>
                <Text style={styles.subtitle}> Please login here</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        iconPosition="right"
                    // error={"This field is required"}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                    />

                    <CustomButton
                        primary
                        title="Submit"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need an account?</Text>
                        <TouchableOpacity
                            onPress={() => { navigate(REGISTER) }
                            }>
                            <Text style={styles.linkButton}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}

export default LoginComponent;