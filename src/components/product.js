import '../pages/home.css'
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Fade from 'react-reveal/Fade'
import Loader from "react-loader-spinner";

const Product = () => {
    const { loading, error, data} = useFetch('https://luxury-watches-store.herokuapp.com/products/')


    if (loading) return <h1 className='loading d-flex justify-content-center'>Loading... <Loader type="TailSpin" color="black" height={70} width={80}/></h1>
    if (error) return <h1 className='loading'>Error!!!! :(</h1>


    return ( 
        <div className="container products">
        <div className='product row'>
            {data.map(products => ( 
                <Fade bottom>                                                                                                 
                <div key={products.id} className='product-card col-lg-3 col-md-4'> 
                <Link to={`/details/${products.id}`}>                                 
                    <img src={products.image[0].name} alt="" className='img img-fluid'/>
                    <h6>{products.title}</h6>
                    <small>{products.price} $</small>
                </Link>                                                                                        
                </div>  
                </Fade>                                                                  
            ))}                               
        </div>
        </div>
     );
}
 
export default Product;