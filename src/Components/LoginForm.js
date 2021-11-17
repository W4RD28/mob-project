import react from 'react';
import FormField from './FormField';
import '../Styles/LoginForm.css';
import logo from '../logo.svg';
import PassField from './PassField';
require('typeface-montserrat')

const LoginForm = ({ onSubmit }) => {
    const emailRef = react.useRef();
    const passwordRef = react.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
        <body className="body-bg min-h-screen pt-12 md:pt-20 md:px-0 align-middle">
            <div className="LoginForm bg-white max-w-lg mx-auto p-8 rounded-lg pb-20">
                <img src={logo} alt="" className="Logo ml-44" />
                <h3 style={{ color: 'brown' }} className="font-bold text-center text-xl text-brown">MOB</h3>
                <form onSubmit={handleSubmit} className="flex flex-col" >
                    <FormField ref={emailRef} type="text" />
                    <PassField ref={passwordRef} type="password" />
                    <div className="mb-3.5">
                        <button type="submit" className="p-3 bg-brown w-full text-xl text-white rounded">Log In</button>
                    </div>
                </form>
                <a href="signup" className="float-left text-blue">Create Account</a>
                <a href="signup" className="float-right text-blue">Forgot Password</a>
            </div>
        </body>
    );
}

export default LoginForm;