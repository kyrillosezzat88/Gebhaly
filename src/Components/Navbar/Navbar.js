import { useContext , useState } from 'react';
import {Link} from 'react-router-dom'
import { OrderContext } from '../../ContextAPI/OrderContext';
import './Navbar.css';
const Navbar = () => {
    const {Order} = useContext(OrderContext);
    const [showCart , setShowCart] = useState(false)
    return(
        <div className="navbar container">
            <h1>Logo</h1>
            <ul className='menu'>
                <Link to='/'><li>Home</li></Link>
                <li className='cart' onClick={() => setShowCart(!showCart)}>Cart <span className='count'>{Order.Cart.length}</span></li>
            </ul>
            {/* Cart View  */}
            {showCart ? (
                <div className="cartView">
                {Order.Cart.length ?
                    <div>
                        {Order.Cart.map(pro => (
                        <div className="product">
                            <div className="details">
                                <img src={pro.picture} alt="pro" width='50px' />
                                <h6>{pro.name}</h6>
                            </div>
                            <div className="price">
                                <h6>{pro.qty} QTY</h6>
                                <h6>{pro.price * pro.qty} EG</h6>
                            </div>
                        </div>
                        ))}
                        <Link to='/cart' className='Checkout' onClick={() => setShowCart(false)}><button>Checkout</button></Link>
                    </div>
                    :
                    <h4 className='empty'>Cart Empty !!</h4>}
                    </div>
            ):null}
        </div>
    )
}
export default Navbar;