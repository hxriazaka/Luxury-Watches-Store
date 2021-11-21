import './navbar2.css'
import { Link } from "react-router-dom";

const Navbar2 = () => {
    return ( 
        <div className="navbar2">
            <div className="container">
                <ul className='row text-center'>
                    <li className='col-3'>
                        <Link to='/'>
                            <p>All</p>
                        </Link>
                    </li>
                    <li className='col-3'>
                        <Link to='/hublot'>
                            <p>Hublot</p>
                        </Link>
                    </li >
                    <li className='col-3'>
                        <Link to='/rolex'>
                            <p>Rolex</p>
                        </Link>
                    </li>
                    <li className='col-3'>
                        <Link to='/armani'>
                            <p>Armani</p>
                        </Link>
                    </li>
                    <li className='col-3'>
                        <Link to='/hugoboss'>
                        <p>Hugo Boss</p>
                        </Link>
                    </li>
                    <li className='col-3'>
                        <Link to='/gucci'>
                        <p>Gucci</p>
                        </Link>
                    </li>
                    <li className='col-3'>
                        <Link to='/tissot'>
                        <p>Tissot</p>
                        </Link>
                    </li>
                    <li className='col-3'>
                        <Link to='/seiko'>
                            <p>Seiko</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar2;