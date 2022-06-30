import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/CartContext";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items.length);
  //const numberofCartitems = 1;
  const numberofCartitems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0);

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartitems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
