import react from 'react';
import FormField from './FormField';
import '../Styles/SignUpForm.css';
import logo from '../logo.svg'; 

const SignUpForm = ({onSubmit}) => {
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
        <div className="SignUpForm">
            <img src={logo} alt="" className="Logo"/>
            <h3>MOB</h3>
            <form onSubmit={handleSubmit} >
                <FormField ref={emailRef} label="Email:" type="text" />
                <FormField ref={passwordRef} label="Password:" type="password" />
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
     );
}
 
export default SignUpForm;