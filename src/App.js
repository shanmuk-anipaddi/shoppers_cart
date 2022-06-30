import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import Cartprovider from "./Components/Store/CartProvider";
function App() {

  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <Cartprovider>
      <Header onShowCart = {showCartHandler}/>
      <main>
        { showCart && <Cart onClose={hideCartHandler}/>}
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
