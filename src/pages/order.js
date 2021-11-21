
import './order.css'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/cartContext";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { getOrder } from '../services/api';
import PayButton from '../components/payButton';
import './order.css'

const Order = () => {
    const {code} = useParams();
    const history = useHistory();
    const {cart} = useContext(CartContext);
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await getOrder(code);
                setOrderDetails(result);
            }catch(e){

            }
        }
    fetchData();
    }, [])
    return ( 
        <div className='order'>
            <div className="b1">
                <h2>Choose a method :</h2>
                <div className="order-btn">
                    {orderDetails && 
                    <PayButton total={orderDetails.total} className='paybtn'/>}
                </div>
            </div>
        </div>
     );


}
 
export default Order;