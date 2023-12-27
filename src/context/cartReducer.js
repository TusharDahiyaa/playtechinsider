import { useReducer, createContext } from "react";

//Initial State
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const Context = createContext();

function cartReducer(state, action) {
  let newCart;
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart[action.payload._id];
      newCart = {
        ...state.cart,
        [action.payload._id]: item
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : {
              ...action.payload,
              quantity: 1,
            },
      };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };

    case "REMOVE_FROM_CART":
      newCart = { ...state.cart };
      if (newCart) {
        delete newCart[action.payload._id];
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      return {
        ...state,
        cart: newCart || {},
      };
    case "INITIALIZE_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "UPDATE_CART":
      const { _id, quantity } = action.payload;
      newCart = { ...state.cart };
      newCart[_id] = { ...newCart[_id], quantity };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };

    case "CLEAR_CART":
      try {
        localStorage.removeItem("cart");
      } catch (error) {
        console.log("Local storage cannot be removed:" + error);
      }
      return {
        ...state,
        cart: {}, // Clear the cart directly
      };

    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
