import './home.css'
import Flip from 'react-reveal/Flip';
import Navbar2 from '../components/navbar2';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hublot from './hublot'
import Rolex from './rolex';
import Armani from './armani';
import HugoBoss from './hugoboss';
import SinglePage from './singlepage';
import Gucci from './gucci';
import Tissot from './tissot';
import Seiko from './seiko';
import PublicIcon from '@mui/icons-material/Public';
import WatchIcon from '@mui/icons-material/Watch';
import WcIcon from '@mui/icons-material/Wc';
import watch1 from '../images/watch1.jpg'
import watch2 from '../images/watch2.jpg'
import watch3 from '../images/watch3.jpg'
import ig1 from '../images/ig1.jpg'
import ig2 from '../images/ig2.jpg'
import ig3 from '../images/ig3.jpg'
import ig4 from '../images/ig4.jpg'

const Home = () => {
    return ( 
        <Router>    
            <Switch>
                <Route exact path ='/'>                    
                <div className="home"> 
                <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                </div>
                <div className="d1 container">
                    <div className="row">
                        <div className="col-4 d1-1">
                            <h2>Worldwide Shipping</h2>
                            <PublicIcon style={{color : 'white', fontSize : '60px'}} className='publicicon'/>
                        </div>
                        <div className="col-4 d1-1">
                            <h2>New Collection</h2>
                            <WatchIcon style={{color : 'white', fontSize : '60px'}} className='publicicon'/>
                        </div>
                        <div className="col-4 d1-1">
                            <h2>Men & Women</h2>
                            <WcIcon style={{color : 'white', fontSize : '60px'}} className='publicicon'/>
                        </div>
                    </div>
                </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>COLLECTION</h1>
                    <div className="row container e1-1">
                        <div className="col-4 d-flex justify-content-center">
                            <img src={watch1} alt="" style={{width : '50%'}} className='e1-1-img'/>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <img src={watch2} alt="" style={{width : '50%'}} className='e1-1-img'/>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <img src={watch3} alt="" style={{width : '50%'}} className='e1-1-img'/>
                        </div>
                    </div>
                </div>
                <div className="e1 container text-center">
                    <h1>INSTAGRAM</h1>
                    <div className="row container e1-1">
                        <div className="col-3 d-flex justify-content-center">
                            <img src={ig1} alt="" style={{width : '111%'}} className='e1-2-img'/>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <img src={ig2} alt="" style={{width : '111%'}} className='e1-2-img'/>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <img src={ig3} alt="" style={{width : '111%'}} className='e1-2-img'/>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <img src={ig4} alt="" style={{width : '111%'}} className='e1-2-img'/>
                        </div>
                    </div>
                </div>
                </Route>                  
                <Route path='/hublot'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>HUBLOT</h1>
                </div>
                    <Hublot />
                </Route>
                <Route path='/rolex'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>ROLEX</h1>
                </div>
                    <Rolex />
                </Route>

                <Route path='/armani'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>ARMANI</h1>
                </div>
                    <Armani />
                </Route> 
                <Route path='/hugoboss'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>HUGO BOSS</h1>
                </div>
                    <HugoBoss />
                </Route>
                <Route path='/gucci'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>GUCCI</h1>
                </div>
                    <Gucci />
                </Route>
                <Route path='/tissot'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>TISSOT</h1>
                </div>
                    <Tissot />
                </Route>
                <Route path='/seiko'>
                <div className="home">
                    <div className="bg">
                        <div className='line1'></div>
                        <div className='line2'></div>
                    <div className="c1">
                        <Flip left cascade>
                            <h1>Luxury Watches</h1>
                            <h4>Buy luxury watches online</h4>
                            <button>Shop Now</button>
                        </Flip>
                    </div>
                    <div className="d1 container">
                        <div className="row">
                            <div className="col-4 d1-1">
                                <h2>Worldwide Shipping</h2>
                                <PublicIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>New Collection</h2>
                                <WatchIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                            <div className="col-4 d1-1">
                                <h2>Men & Women</h2>
                                <WcIcon style={{color : 'white', fontSize : '60px'}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Navbar2 />
                <div className="e1 container text-center">
                    <h1>SEIKO</h1>
                </div>
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