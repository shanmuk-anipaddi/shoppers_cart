import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartItemRemoveHandler = (id) => {
    //console.log("remove Item from cart fly");
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.additem({...item,amount:1});
  };

  const cartCtx = useContext(CartContext);
  const cartTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  //console.log("Hase items :" + hasItems);
  //console.log("THis is context :", cartCtx.items);
  // console.log("THis is context :", cartCtx.totalAmount);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
