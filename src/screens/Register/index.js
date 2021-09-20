import React, { useState } from 'react';
import RegisterComponent from '../../components/RegisterComponent';
import envs from '../../config/envs';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({})

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
    }

    const onSubmit = () => {
        console.log("form >>> ", form);
        validateOnSubmit();
    }
    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
        />
    )
}

export default Register;