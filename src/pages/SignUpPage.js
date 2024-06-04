import React, { useEffect } from 'react';
import { Label } from '../components/label';
import Input from '../components/input/Input';
import { useForm } from 'react-hook-form';
import Field from '../components/field/Field';
import Button from '../components/button/Button';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth, db } from '../firebase-app/firebase-config';
import { NavLink, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import AuthenticationPage from './AuthenticationPage';
import InputPasswordToggle from '../components/input/InputPasswordToggle';



const schema = yup.object({
    fullname: yup
        .string()
        .required('Please enter your fullname'),
    email: yup
        .string()
        .email('Please enter valid email address')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(8, 'Your pasdword must be at least 8 characters or greater')
        .required('Please enter your password'),
})

const SignUpPage = () => {
    const navigate = useNavigate();
    const {
        control, 
        handleSubmit,
        formState: {errors, isValid, isSubmitting}
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const handleSignUp = async (values) => {
        // console.log(errors);
        if (!isValid) return;
        console.log('values', values);
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        updateProfile(auth.currentUser, {
            displayName: values.fullname,
        })
        const colRef = collection(db, 'users');
        await addDoc(colRef, {
            fullname: values.fullname,
            email: values.email,
            password: values.password,
        });
        toast.success('Register successfully');
        navigate('/');
        
    }

    // console.log(Object.values(errors));
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false,
                delay: 100,
            });
        }
    }, [errors]);

    useEffect(() => {
        document.title = "Register Page";
    })
    return (
        <AuthenticationPage>
            <form className='form' onSubmit={handleSubmit(handleSignUp)}>
                <Field>
                    <Label htmlFor='fullname'>
                        Full Name
                    </Label>
                    <Input
                        type='text'
                        name='fullname'
                        placeholder='Enter your fullname'
                        control={control}
                    />
                </Field>
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
                    You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>{" "}
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
                    Sign Up
                </Button>
            </form>
        </AuthenticationPage>
    );
};

export default SignUpPage;