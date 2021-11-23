import SignUpForm from "./SignUpForm";
import '../Styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase'
import { useHistory } from 'react-router-dom';



const SignUp = () => {
    let history = useHistory();

    const handleSubmit = data => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
            }) 
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.errorMessage;
                console.log(errorCode, errorMessage);
            })
            auth.onAuthStateChanged(user => {
                history.push('/workspaces');
            })
    };

    return ( 
        <SignUpForm onSubmit={handleSubmit} />
     );
}
 
export default SignUp;