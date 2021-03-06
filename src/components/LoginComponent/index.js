import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Container from '../Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { REGISTER } from '../../constants/routeNames';
import MessageComponent from '../Common/MessageComponent';

const LoginComponent = (props) => {
    const { navigate } = useNavigation();
    const {
        form,
        loading,
        onChange,
        onSubmit,
        error,
        justSignedUp
    } = props;

    const [isSecureEntry, setIsSecureEntry] = useState(true);

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

                    {justSignedUp && <MessageComponent //This will show if the error is not local error
                        success
                        message="Account created successfully"
                        onDismiss={() => {
                            console.log("onDismiss called");
                        }}
                    />}

                    {error && !error.error && <MessageComponent //This will show if the error is not local error
                        danger
                        message="Invalid Credential"
                        onDismiss={() => {
                            console.log("onDismiss called");
                        }}
                    />
                    }

                    {error?.error && //if local error
                        <MessageComponent
                            danger
                            message={error?.error}
                            retry
                            retryFn={() => {
                                console.log("Hello World")
                            }}
                        />}

                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        value={form.userName || null}
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "userName", value });
                        }}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        icon={
                            <TouchableOpacity
                                onPress={() => { setIsSecureEntry((prev) => !prev) }}
                            >
                                <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                            </TouchableOpacity>
                        }
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "password", value })
                        }}
                    />

                    <CustomButton
                        primary
                        loading={loading}
                        disabled={loading}
                        title={loading ? "Submitting. Please wait..." : "Submit"}
                        onPress={onSubmit}
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