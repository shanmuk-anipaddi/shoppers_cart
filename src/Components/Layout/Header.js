import React from "react";
import classes from "./Header.module.css";
import mealImage from "../assets/meals.jpg";
import  HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Shopper Cart</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="MealImage here" />
      </div>
    </React.Fragment>
  )
}

export default Header;
