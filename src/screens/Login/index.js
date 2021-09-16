import React, { useState } from 'react';
import { Text } from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Common/Input';
import CustomButton from '../../components/Common/CustomButton';

const Login = () => {
    const [value, setValue] = useState("");

    return (
        <Container>
            <Input
                label="Username"
                onChangeText={(text) => setValue(text)}
                value={value}
                iconPosition="right"
                error={"This field is required"}

            />

            <Input
                label="Password"
                onChangeText={(text) => setValue(text)}
                value={value}
                icon={<Text>HIDE</Text>}
                iconPosition="right"

            />

            <CustomButton
                primary
                title="Submit"
                loading={true}
                disabled={false}
                onPress={() => { alert("PRESSED") }}
            />
            <CustomButton
                secondary
                title="Click me!"
                loading={true}
                disabled={true}
                onPress={() => { alert("PRESSED") }}
            />
            <CustomButton
                danger
                title="Submit"
                loading={false}
                disabled={false}
                onPress={() => { alert("PRESSED") }}
            />
        </Container>
    )
}

export default Login;