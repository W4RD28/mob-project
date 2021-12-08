import SignUpForm from "./SignUpForm";
import '../Styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firestore, auth } from '../Firebase'
import { useHistory } from 'react-router-dom';



const SignUp = () => {
    let history = useHistory();

    const handleSubmit = data => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.displayName = data.userName;

                firestore.db.collection("users").doc(user.uid).set({
                    username: auth.currentUser.displayName,
                    location: data.location
                }, { merge: true });
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