import { useContext } from 'react'
import { toast } from 'react-toastify';
import { OrderContext } from '../../ContextAPI/OrderContext'
import './ProductCard.css'
const ProductCard = ({data}) => {
    const {Order , dispatch} = useContext(OrderContext);
    //add to cart function 
    const AddToCart = (id) => {
        //find product in products array (available products )
        const product = Order.Products.find(pro => pro.id === id);
        //dispatch an action to sotre it in cart array 
        dispatch({type:"ADD_PRODUCT" , payload:{...product , qty:1}});
        dispatch({type:"GET_TOTAL"});
        toast('Added Successfully' , {type:'success'})
    }
    return(
        <div className='productCard'>
            <img src={data.picture} width='200px' alt="pro" />
            <h4 className='title'>{data.name}</h4>
            <div className="price">
                <span>{data.price} EG</span>
                <span>{data.available_quantity} QTY</span>
            </div>
            <button onClick={() => AddToCart(data.id)}>Add To Cart</button>
        </div>
    )
}
export default ProductCard