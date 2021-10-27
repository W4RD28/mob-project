import '../Styles/Navbar.css'
import logo from '../logo.svg'

const Navbar = () => {
    return ( 
        <nav>
            <img src={logo} alt='Mob Logo' className="Logo"/>
            <p className='Appname'>MOB</p>

            <button className='Button Login'>Login</button>
            <button className='Button Signup'>Sign Up</button>
        </nav>
        
     );
}
 
export default Navbar;