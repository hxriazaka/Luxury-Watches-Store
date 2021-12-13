import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import './cartShop.css'
import { useHistory } from "react-router";

const CartShop = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const {items = []} = cart;
    const history = useHistory();

    return ( 
        <div>
        <div className="row cart">
        <div className="cart-shop1 col-md-6 container">
                    {items.map( item =>(
                        <div key={item.id} className='item'>
                            <h4 className='v2'>{item.title}</h4>
                            <img src={item.image[0].name} alt="" className='v2 img-fluid'/>
                            <small className='v3'>Quantity : {item.qty}</small>
                            <small className='v3'>Price : {item.price * item.qty} $</small>
                            <div>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-shop2 col-md-6 container">
                        <h1>Total : {cart.cartTotal} $</h1>
                        <button onClick={() => history.push('/checkout')}>Checkout</button>
                </div>
        </div>
        </div>
     );
}
 
export default CartShop;