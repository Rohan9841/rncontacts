import { useFocusEffect, useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import RegisterComponent from '../../components/RegisterComponent';
import { LOGIN } from '../../constants/routeNames';
import register, { clearAuthState } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({})
    const {
        authDispatch,
        authState: { error, loading, data }
    } = useContext(GlobalContext);

    const { navigate } = useNavigation();

    const onChange = ({ name, value }) => {
        setForm({
            ...form,
            [name]: value
        });

        validateOnChange({ name, value });
    }

    const validateOnChange = ({ name, value }) => {
        if (value !== "") {
            if (name === "password") {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: "Password should be at least 6 characters long." }
                    })
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null }
                    })
                }
            }
            else {
                setErrors((prev) => {
                    return { ...prev, [name]: null }
                })
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: "This field is required" }
            })
        }
    }

    const validateOnSubmit = () => {
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: "Please add a username" }
            })
        }
        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: "Please add a first Name" }
            })
        }
        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: "Please add a last name" }
            })
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: "Please add an email" }
            })
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: "Please add a password" }
            })
        }

        if (Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)) {
            register(form)(authDispatch);
        } else console.log("There is error.")
    }

    const onSubmit = () => {
        console.log("form >>> ", form);
        validateOnSubmit();
    }

    useEffect(() => {
        if (data) navigate(LOGIN);
        return () => {
            console.log("cleanup in Register/index.js");
        }
    }, [data])

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if (data || error) clearAuthState()(authDispatch); // This will execute when you get out of the Register screen
                console.log("cleanup in Register/index.js after useFocusEffect.")
            }
        }, [data])
    )
    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    )
}

export default Register;