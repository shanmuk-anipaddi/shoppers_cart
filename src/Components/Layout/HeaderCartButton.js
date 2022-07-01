import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/CartContext";
const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const cartCtx = useContext(CartContext);

  //Object destructuring
  const { items } = cartCtx;

  console.log(cartCtx.items.length);
  //const numberofCartitems = 1;
  const numberofCartitems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClassses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <React.Fragment>
      <button className={btnClassses} onClick={props.onClick}>
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
