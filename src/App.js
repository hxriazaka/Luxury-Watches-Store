import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from './Context/cartContext';
import CartShop from './pages/cartshop';
import Checkout from './pages/checkout';
import Order from './pages/order';
import SinglePage from './pages/singlepage';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">     
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route path='/cartshop'>
            <CartShop />
          </Route>
          <Route path='/details/:id'>
            <SinglePage />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/orders/:code'>
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
