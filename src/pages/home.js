import './home.css'
import Flip from 'react-reveal/Flip';
import Navbar2 from '../components/navbar2';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hublot from './hublot'
import Rolex from './rolex';
import Armani from './armani';
import HugoBoss from './hugoboss';
import SinglePage from './singlepage';
import Product from '../components/product';
import Gucci from './gucci';
import Tissot from './tissot';
import Seiko from './seiko';

const Home = () => {
    return ( 
        <Router>    
            <Switch>
                <Route exact path ='/'>
                <div className="home">
                    <div className="bg">
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                   <Product /> 
                </Route>                  
                <Route path='/hublot'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    < Hublot />               
                </Route> 
                <Route path='/rolex'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    <Rolex />
                </Route>   
                <Route path='/armani'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    <Armani />
                </Route> 
                <Route path='/hugoboss'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    <HugoBoss />
                </Route>
                <Route path='/gucci'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    <Gucci />
                </Route>
                <Route path='/tissot'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    <Tissot />
                </Route>
                <Route path='/seiko'>
                <div className="home">
                <div className="bg">
                    <div className="c1">
                        <h1>Luxury Watches</h1>
                        <h4>Buy luxury watches online</h4>
                        <button>Shop Now</button>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                    <Seiko />
                </Route>





                <Route path='/details/:id'>
                    <SinglePage />            
                </Route>               
            </Switch> 
        </Router>
     );
}
 
export default Home;