import react from 'react';
import FormField from './FormField';
import '../Styles/LoginForm.css';
import logo from '../logo.svg'; 

const LoginForm = ({onSubmit}) => {
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
        <div className="SignupForm">
            <img src={logo} alt="" className="Logo"/>
            <h3>MOB</h3>
            <form onSubmit={handleSubmit} >
                <FormField ref={emailRef} label="Email:" type="text" />
                <FormField ref={passwordRef} label="Password:" type="password" />
                <div>
                    <button type="submit">Login</button>
                </div>
                <a href="signup" className="float-left">Create Account</a>
                <a href="signup" className="float-right">Forgot Password</a>
            </form>
        </div>
     );
}
 
export default LoginForm;