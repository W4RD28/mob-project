import '../Styles/Header.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='Navigation'>
            <Link to="/">
                <img src={logo} alt='logo mob' className='Logo' />
                <p className='Appname'>MOB</p>
            </Link>
            
            <div className='HeaderButtons'>
                <Link to="/login">
                    <button className="Button Login">Log In</button>
                </Link>
                <Link to="/signup">
                    <button className="Button Signup">Sign Up</button>
                </Link>
            </div>
        </div>
        
     );
}
 
export default Navbar;