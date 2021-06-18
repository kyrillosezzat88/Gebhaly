import { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { OrderContext } from "../../ContextAPI/OrderContext";
import './ProductList.css'
const ProductList = () => {
    const {Order} = useContext(OrderContext);
    return (
        <div className='ProductList container'>
            {Order.Products.map(pro => (
                <ProductCard key={pro.id} data={pro} />
            ))}
        </div>
    )
}
export default ProductList;