import { Grid, TextField } from "@mui/material";
import './checkout.css'
import * as Yup from 'yup';
import {useFormik} from 'formik'
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { createOrder, fetchProducts } from "../services/api";
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const {cart} = useContext(CartContext)
    const history = useHistory();

    const fomrik = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            adress:'',
        },
        
        validationSchema: Yup.object().shape({
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            email: Yup.string().email().required()
        }),
        onSubmit : async values => {
            const { items = []} = cart;
            const productIds = items.map(item => `id_in=${item.id}`);
            const query = productIds.join('&')
            try{
                const products = await fetchProducts(query);
                let total = 0;
                items.forEach(item => {
                    const product = products.find(p => p.id === item.id)
                    total += item.qty * product.price;
                });

                const order = await createOrder({
                    ...values,
                    total: `${total}`
                })
                console.log(order)
                history.push(`/orders/${order.code}`)
            } catch(e) {
                console.error(e)
            }
        }
    });

    const {getFieldProps} = fomrik;
    return ( 
        <div className='checkout container'>
            <h2>Personal Details</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField name='firstname' placeholder='First Name' fullWidth {...getFieldProps('firstname')}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField name='lastname' placeholder='Last Name' fullWidth {...getFieldProps('lastname')}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField name='email' placeholder='Email' fullWidth {...getFieldProps('email')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField name='phone' placeholder='Phone' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField name='adress' placeholder='Adress' fullWidth/>
                </Grid>
            </Grid>
            <button type="submit" onClick={fomrik.handleSubmit}>Continue to Payment</button>
        </div>
     );
}
 
export default Checkout;