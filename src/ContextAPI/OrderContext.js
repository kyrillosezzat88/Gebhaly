import { createContext , useReducer , useEffect } from "react";
import OrderReducer from "../Reducers/OrderReducer";
import Productss from '../Data/Products.json'
//inistial state 
const initState = {
    Products:[],
    Cart:[],
    Total:0
}
// create context 
export const OrderContext = createContext(initState);

const OrderProvider = (props) => {
    const [Order , dispatch] = useReducer(OrderReducer ,initState);
    // get products from api(json file ) when page loaded --- Note --> am using axios when call real api 
    useEffect(() => {
        // will dispatch an action (to store data coming from api)
        dispatch({type:"GET_PRODUCT" , payload:Productss});
    },[])
    return(
        <OrderContext.Provider value={{Order , dispatch}}>
            {props.children}
        </OrderContext.Provider>
    )
}
export default OrderProvider;