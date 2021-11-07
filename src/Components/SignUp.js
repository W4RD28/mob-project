import SignUpForm from "./SignUpForm";
import '../Styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase'

const handleSubmit = data => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        }) 
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(errorCode, errorMessage);
        })
};

const SignUp = () => {
    return ( 
        <SignUpForm onSubmit={handleSubmit} />
     );
}
 
export default SignUp;