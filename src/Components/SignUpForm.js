import react from 'react';
import { firestore } from '../Firebase';
import FormField from './FormField';
import PassField from './PassField';
import '../Styles/SignUpForm.css';
import logo from '../assets/logo.svg';

const SignUpForm = ({ onSubmit }) => {
    const emailRef = react.useRef();
    const userNameRef = react.useRef();
    const locationRef = react.useRef();
    const passwordRef = react.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            userName: userNameRef.current.value,
            location: locationRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
        <body className="body-bg min-h-screen pt-12 md:pt-20 md:px-0 align-middle">
            <div className="SignUpForm">
                <img src={logo} alt="" className="Logo ml-44" />
                <h3 style={{ color: 'brown' }} className="font-bold font-header text-center text-xl text-brown">MOB</h3>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <FormField ref={emailRef} placeholder="Email Address" type="text" />
                    <FormField ref={userNameRef} placeholder="User Name" type="text" />
                    <FormField ref={locationRef} placeholder="Location" type="text" />
                    <PassField ref={passwordRef} type="password" />
                    <div className="mb-3.5">
                        <button type="submit" className="p-3 bg-brown w-full text-xl text-white rounded">Create Account</button>
                    </div>
                </form>
                <a href="login" className="float-left text-blue">Already have an account?</a>
            </div>
        </body >
    );
}

export default SignUpForm;