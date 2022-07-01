import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;
    const existingCartItem = state.items[cartItemIndex];
    //console.log(existingCartItem);
    if (existingCartItem) {
      let updateExistingCartitem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //console.log("CartIndex : ", cartItemIndex);
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updateExistingCartitem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    //const updatedItems = state.items.concat(action.item);
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    
    console.log("this is existingItemIndex : "+existingItemIndex)
    // let updatedItems;
     const existingItem = state.items[existingItemIndex];
     console.log("existitem :",existingItem);
     const updatedTotalAmount = state.totalAmount - existingItem.price;
    // if (existingItem.amount === 1) {
    //   updatedItems = state.items.filter((item) => action.id !== item.id);
    // } else {
    //   updatedItems = { ...existingItem, amount: existingItem.amount - 1 };
    //   updatedItems = [...state.items];
    //   updatedItems[existingItemIndex] = updatedItems;
    // }

    // return { items: updatedItems, totalAmount: updatedTotalAmount };
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
    console.log("delete Id",id);
    dispatchCarthandler({ type: "REMOVE", id: id });
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
