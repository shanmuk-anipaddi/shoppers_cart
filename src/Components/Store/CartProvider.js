import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmout: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

const Cartprovider = (props) => {
  const [cartState, dispatchCarthandler] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (item) => {
    dispatchCarthandler({ type: "ADD", item: item });
  };

  const removeItemfromCartHandler = (id) => {
    dispatchCarthandler({type:"REMOVE",id:id})
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    additem: addItemtoCartHandler,
    removeItem: removeItemfromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
