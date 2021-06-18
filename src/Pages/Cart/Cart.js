import { useContext } from 'react';
import { toast } from 'react-toastify';
import { OrderContext } from '../../ContextAPI/OrderContext';
import './Cart.css'
const Cart = () => {
    const {Order , dispatch} = useContext(OrderContext);
    //increment function
    const Inc = (id) => {
        dispatch({type:"INC_QTY" , payload:id});
        dispatch({type:"GET_TOTAL"});
    }
    // decrement function 
    const Dec = (id) => {
        dispatch({type:"DEC_QTY" , payload:id});
        dispatch({type:"GET_TOTAL"});
    }
    //Delete function 
    const Delete = (id ) => {
        dispatch({type:"DELETE" , payload:id});
        dispatch({type:"GET_TOTAL"});
        toast('Deleted Successfully' , {type:"success"})
    } 
    //check is there Products in cart or not 
    if(Order.Cart.length){
    return (
        <div className="Cart container">
            <div className="Orders">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    {Order.Cart.map(pro => (
                        <tr key={pro.id}>
                            <td className='product'>
                                <img src={pro.picture} width='50px' alt="pro" />
                                <p>{pro.name}</p>
                            </td>
                            <td>
                                <span className='dec' onClick={() => Dec(pro.id)}>-</span>
                                <span className='count'>{pro.qty}</span> 
                                <span className='inc' onClick={() => Inc(pro.id)}>+</span></td>
                            <td>{pro.price * pro.qty} Eg</td>
                            <td><button onClick={() => Delete(pro.id)}>delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="prices">
                <div className="total">
                    <span>Total</span>
                    <span>{Order.Total} EG</span>
                </div>
                <button>Pay Now</button>
            </div>
        </div>
    )} else{
        return (
            <p className='Cart'>Cart is Empty </p>
        )
    }
}
export default Cart;