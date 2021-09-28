import { useRoute } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import LoginComponent from '../../components/LoginComponent';
import login from '../../context/actions/auth/login';
import { GlobalContext } from '../../context/Provider';

const Login = () => {
    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);

    const { params } = useRoute();

    const {
        authDispatch,
        authState: { error, loading, data }
    } = useContext(GlobalContext);

    const onChange = ({ name, value }) => {
        setJustSignedUp(false);
        setForm({ ...form, [name]: value });
    }
    const onSubmit = () => {
        if (form.userName && form.password) {
            login(form)(authDispatch)
        }
    }

    useEffect(() => {
        if (params?.data) {
            setJustSignedUp(true);
            setForm({ ...setForm, userName: params.data.username })
        }
        return () => {
            console.log("cleanup in screens/login/index.js after param change")
        }
    }, [params])

    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
            justSignedUp={justSignedUp}
        />
    )
}

export default Login;