const OrderReducer = (state , action) => {
    switch (action.type) {
        // case to store products 
        case "GET_PRODUCT":
            return{
                ...state,
                Products:action.payload
            }
        //case to add product to cart 
        case "ADD_PRODUCT":
            //add function 
            const AddFun = () => {
                //get product 
                const product = state.Cart.find(pro => pro.id === action.payload.id);
                //check product in cart or not
                if(product){
                    // if proudct found the quantity will incresse by 1
                    product.qty += 1;
                    return state.Cart
                }else {
                    // if not will add it in cart 
                    return [...state.Cart , action.payload]
                }
            }
            return{
                ...state,
                Cart:AddFun()
            }
            //increment quantity
            case "INC_QTY":
                //func inc 
                const Inc = () => {
                    const GetPro = state.Cart.find(pro => pro.id === action.payload);
                    //incress quantity one
                    GetPro.qty += 1;
                    return state.Cart
                }
                return {
                    ...state,
                    Cart:Inc()
                }
            case "DEC_QTY":
                // decrement function 
                const Dec = () => {
                    const GetPro = state.Cart.find(pro => pro.id === action.payload);
                    //check qty
                    GetPro.qty > 1 ? GetPro.qty -= 1 : GetPro.qty = 1
                    return state.Cart
                }
                return {
                    ...state,
                    Cart:Dec()
                }
            case "DELETE" :
                return{
                    ...state,
                    Cart:state.Cart.filter(pro => pro.id !== action.payload)
                }
            //get Total of orders 
            case "GET_TOTAL":
                return{
                    ...state,
                    Total:state.Cart.map(pro => pro.qty * pro.price).reduce((a,b) => a + b,0)
                }
        default:
            return state
    }
}
export default OrderReducer;