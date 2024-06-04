import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthenticationPage from './AuthenticationPage';
import Field from '../components/field/Field';
import { Label } from '../components/label';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-app/firebase-config';
import { NavLink, useNavigate } from 'react-router-dom';
import InputPasswordToggle from '../components/input/InputPasswordToggle';


const schema = yup.object({
    email: yup
        .string()
        .email('Please enter valid email address')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(8, 'Your pasdword must be at least 8 characters or greater')
        .required('Please enter your password'),
})


const SignInPage = () => {
    const {userInfo} = useAuth();
    // console.log(userInfo);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Login Page";
        // if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userInfo]);
    const {
        control, 
        handleSubmit,
        formState: {errors, isValid, isSubmitting}
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    const handleSignIn = async (values) => {
        if (!isValid) return;
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate("/");
    }
    useEffect (() => {
        const arrErrors = Object.values(errors);
        if(arrErrors.length > 0){
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false,
                delay: 0
            })
        }
    },[errors])
    return (
        <AuthenticationPage>
             <form className='form' onSubmit={handleSubmit(handleSignIn)}>
                <Field>
                    <Label htmlFor='email'>
                        Email Address
                    </Label>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        control={control}
                    />
                </Field>
                <Field>
                    <Label htmlFor='password'>
                        Password
                    </Label>
                    <InputPasswordToggle control={control}></InputPasswordToggle>
                </Field>
                <div className='have-account'>
                    You have not had an account? <NavLink to={"/sign-up"}>Register an account</NavLink>{" "}
                </div>
                <Button 
                    type='submit' 
                    style={{
                        width: '100%',
                        maxWidth: 300,
                        margin: '0 auto',
                    }}
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                >
                    Sign In
                </Button>
            </form>
        </AuthenticationPage>
    );
};

export default SignInPage;