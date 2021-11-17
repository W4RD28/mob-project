import react from 'react';
import FormField from './FormField';
import PassField from './PassField';
import '../Styles/SignUpForm.css';
import logo from '../logo.svg';

const SignUpForm = ({ onSubmit }) => {
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
            <div className="SignUpForm bg-white max-w-lg mx-auto p-8 rounded-lg pb-20">
                <img src={logo} alt="" className="Logo ml-44" />
                <h3 style={{ color: 'brown' }} className="font-bold font-header text-center text-xl text-brown">MOB</h3>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <FormField ref={emailRef} type="text" />
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