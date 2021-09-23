import React, { useContext, useState } from 'react';
import LoginComponent from '../../components/LoginComponent';
import login from '../../context/actions/auth/login';
import { GlobalContext } from '../../context/Provider';

const Login = () => {
    const [form, setForm] = useState({});
    const {
        authDispatch,
        authState: { error, loading, data }
    } = useContext(GlobalContext);

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    }
    const onSubmit = () => {
        if (form.userName && form.password) {
            login(form)(authDispatch)
        }
    }
    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
        />
    )
}

export default Login;