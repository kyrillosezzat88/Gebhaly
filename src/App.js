import {BrowserRouter,Route , Switch} from 'react-router-dom'
import OrderProvider from './ContextAPI/OrderContext';
import ProductList from './Pages/ProductList/ProductList';
import Cart from './Pages/Cart/Cart';
import CheckOut from './Pages/Checkout/CheckOut';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// am using my own style 
import './GlobalStyles/GlobalStyles.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <OrderProvider>
        {/* React Toastify for alerts  */}
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        ></ToastContainer>
        <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ProductList} />
            {/* <Route path='/product-details' component={ProductDetails} /> */}
            <Route path='/cart' component={Cart} />
            <Route path ='/checkout' component={CheckOut} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
