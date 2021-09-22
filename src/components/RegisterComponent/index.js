import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
import Container from "../Container";
import styles from './styles';
import { LOGIN } from "../../constants/routeNames";
import { useNavigation } from "@react-navigation/core";

const RegisterComponent = (props) => {
    const { navigate } = useNavigation();
    const {
        onSubmit,
        onChange,
        form,
        loading,
        error,
        errors
    } = props;

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
                <Text style={styles.subtitle}> Create a free acount</Text>

                <View style={styles.form}>

                    {error?.error && <Text>{error.error}</Text>}
                    <Input
                        label="Username"
                        placeholder="Enter username"
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "userName", value });
                        }}
                        error={errors.userName || error?.username?.[0]}
                    />

                    <Input
                        label="First Name"
                        placeholder="Enter your first name"
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "firstName", value });
                        }}
                        error={errors.firstName || error?.first_name?.[0]}
                    />

                    <Input
                        label="Last Name"
                        placeholder="Enter your last name"
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "lastName", value });
                        }}
                        error={errors.lastName || error?.last_name?.[0]}
                    />

                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "email", value });
                        }}
                        error={errors.email || error?.email?.[0]}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: "password", value })
                        }}
                        error={errors.password || error?.password?.[0]}
                    />

                    <CustomButton
                        primary
                        loading={loading}
                        disabled={loading}
                        title={loading ? "Submitting. Please wait..." : "Submit"}
                        onPress={onSubmit}
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => { navigate(LOGIN) }
                            }>
                            <Text style={styles.linkButton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}

export default RegisterComponent;