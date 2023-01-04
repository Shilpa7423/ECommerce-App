import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AvailableProducts from './Components/Products/AvailableProducts';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cartShown, setCartShown]= useState(false);
  const showCartHandler=()=>{
    setCartShown(true);
  }
  const hideCartHandler=()=>{
    setCartShown(false);
  }

  return (
    <>
    <Header onShowCart={showCartHandler}/>
   {cartShown && <Cart onCloseCart={hideCartHandler}/>}
   <AvailableProducts/>   
    </>
  );
}

export default App;
