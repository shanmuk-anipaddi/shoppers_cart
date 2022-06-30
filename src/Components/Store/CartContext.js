import { createContext } from "react";

const CartContext = createContext({
  items:[{}],
  totalAmount: 0,
  additem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
