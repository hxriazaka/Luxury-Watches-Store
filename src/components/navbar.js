import './navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../Context/cartContext';
import { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const {cart} = useContext(CartContext)

    return ( 
        <nav className="navbar navbar-expand-lg fixed-top">           
            <div className="container-fluid container">
                <Link to='/'>
                    <div className="navbar-brand">Luxury Watches</div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to ='/'>                       
                            <p className="nav-link" href="#">Home</p>
                        </Link>
                    </li>                  
                    <li className="nav-item">
                        <Link to ='/'>                       
                            <p className="nav-link" href="#">Features</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/'>                       
                            <p className="nav-link" href="#">Blog</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/'>                       
                            <p className="nav-link" href="#">Elements</p>
                        </Link>
                    </li>
                </ul>
                <div>
                <Link to='/cartshop' style={{color : 'black', textDecoration:'none'}}>
                    <div className="shopingicon">
                            <ShoppingCartIcon fontSize="large" />
                            <span >{cart.itemsCount}</span>
                    </div> 
                </Link>
                </div>
                </div>  
            
            </div>          
        </nav>
     );
}
 
export default Navbar;