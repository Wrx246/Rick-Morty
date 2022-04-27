import React, { useEffect, useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
import * as authActions from '../../../store/actions/authAcitons';
import RegButton from "../../../UI/buttons/registrationButton/RegButton";
import LoginPage from "../login/LoginPage";
import st from './RegistrationPage.module.scss';
import setRegistration from "../../../services/registrationService";
import { useDispatch, useSelector } from "react-redux";
import { getIsRegistratedSelector } from "../../../selectors/charactersSelector";


const RegistrationPage = () => {
    const dispatch = useDispatch();
    const isRegistrated = useSelector(getIsRegistratedSelector);
    // const [login, setLogin] = useState(false);

    // const userCheck = localStorage.getItem('Username')
    // const passCheck = localStorage.getItem('Password')

    // useEffect(() => {
    //     if (userCheck && passCheck) {
    //         setLogin(true)
    //     } else if (!userCheck && !passCheck) {
    //         setLogin(false)
    //     }
    // }, [userCheck, passCheck])

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        },
        onSubmit: (values) => {
            setRegistration( values.username, values.email, values.password)
            dispatch(authActions.isRegistrated(true))
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .max(15, "Must be 10 characters or less")
            .min(5, "Must be 5 characters or more")
            .required("Required"),
            password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .min(5, "Must be 5 characters or more")
            .required("Required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Required")
        })
    });


    if (isRegistrated) {
        return (
            <LoginPage />
        )
    } else {
        return (
            <div className={st.registration}>
                <div className={st.registration__header}>
                    <h1>Registration</h1>
                    <hr />
                    <div className={st.registration__form}>
                        <h2>Registration account</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={st.form__body}>
                                <label htmlFor='name'>Username</label>
                                <input
                                    id='username'
                                    className={st.form__input}
                                    type='text'
                                    placeholder='Username'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.username && formik.errors.username ? 
                                <p>{formik.errors.username}</p> : null}
                                <label htmlFor='email'>Email</label>
                                <input
                                    id='email'
                                    className={st.form__input}
                                    type='email'
                                    placeholder='Email'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email ? 
                                <p>{formik.errors.email}</p> : null}
                                <label htmlFor='password'>Password</label>
                                <input
                                    id='password'
                                    className={st.form__input}
                                    type='password'
                                    placeholder='Password'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                { formik.touched.password && formik.errors.password ? 
                                <p>{formik.errors.password}</p> : null}
                            </div>
                            {/* <button type="submit">submit</button> */}
                            <RegButton
                            username={formik.values.username}
                            email={formik.values.email}
                            password={formik.values.password}
                            name='Registration' />
                        </form>
                    </div>
                </div>

            </div>
        )
    }


}

export default RegistrationPage;