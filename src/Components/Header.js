import '../Styles/Header.css'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='Navigation'>
            <Link to="/">
                <img src={logo} alt='logo mob' className='Logo' />
                <p className='Appname'>MOB</p>
            </Link>
            
            <div className='HeaderButtons'>
                <Link to="Login">
                    <button className="Button Login">Login</button>
                </Link>
                <Link to="Signup">
                    <button className="Button Signup">Signup</button>
                </Link>
            </div>
        </div>
        
     );
}
 
export default Navbar;