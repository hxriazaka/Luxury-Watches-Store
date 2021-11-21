import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import './singlepage.css'
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import Loader from "react-loader-spinner";



const SinglePage = () => {
    const { id } = useParams()
    const { loading, error, data} = useFetch('https://luxury-watches-store.herokuapp.com/products/'+ id)
    const {addToCart} = useContext(CartContext);


    if (loading) return <h1 className='loading d-flex justify-content-center'>Loading... <Loader type="TailSpin" color="black" height={70} width={80}/></h1>
    if (error) return <h1 className='loading'>Error!!!! :(</h1>
    

    return (
        <div className="singlepage">
            <div className="container">
                <div className="row singlepage-card" >
                        <div className="col-lg-6">
                            <img src={data.image[0].name} alt="" className='singlepage-img img-fliud'/>
                        </div>
                        <div className="col-lg-6 singlepage-content">
                            <h1>{data.title}</h1>
                            <p>{data.body}</p>
                            <small>{data.price} $</small>
                            <div>
                                <button onClick={() => addToCart(data)}>Add to Cart</button>
                            </div>
                        </div>         
                </div>
            </div>
        </div> 
    )
}
 
export default SinglePage;