import LoginForm from './LoginForm';
import '../Styles/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();

    const handleSubmit = data => {    
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
            auth.onAuthStateChanged(user => {
                history.push('/workspaces');
            })
    };

    return ( 
        <LoginForm onSubmit={handleSubmit}/>
     );
}
 
export default Login;