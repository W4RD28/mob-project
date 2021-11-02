import '../Styles/Navbar.css'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='Navigation'>
            <Link to="/">
                <img src={logo} alt='logo mob' className='Logo' />
                <p className='Appname'>MOB</p>
            </Link>
            
        </div>
        
     );
}
 
export default Navbar;