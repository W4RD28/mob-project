import LoginForm from './LoginForm';
import '../Styles/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';


const Login = () => {
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
    };

    return ( 
        <LoginForm onSubmit={handleSubmit}/>
     );
}
 
export default Login;