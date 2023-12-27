import { useContext, useEffect, useCallback } from "react";
import { Context } from "../../context/cartReducer";
import { Link } from "react-router-dom";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default function Cart() {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;

  let total = Object.entries(cart).reduce(
    (acc, [_, { productId, quantity }]) => {
      const itemPrice = productId?.new_price
        ? parseFloat(productId.new_price.replace(/\$/, ""))
        : 0;
      return acc + itemPrice * quantity;
    },
    0
  );

  const userToken = localStorage.getItem("access_token");
  const fetchUserCart = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/user/cart`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${userToken}`, // Include the user token
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // console.log("Server Response:", data);
        dispatch({ type: "INITIALIZE_CART", payload: data });
      } else {
        console.error("Error fetching user cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  }, [userToken, dispatch]);

  useEffect(() => {
    fetchUserCart();
  }, [fetchUserCart]);

  const increaseQuantity = async (cart) => {
    dispatch({ type: "SET_CART_LOADING", payload: true });
    await updateCartQuantity(cart, 1);
    dispatch({ type: "SET_CART_LOADING", payload: false });
  };

  const decreaseQuantity = async (cart) => {
    dispatch({ type: "SET_CART_LOADING", payload: true });
    await updateCartQuantity(cart, -1);
    dispatch({ type: "SET_CART_LOADING", payload: false });
  };

  const removeItem = async (cart) => {
    dispatch({ type: "SET_CART_LOADING", payload: true });
    await removeCartItem(cart);
    dispatch({ type: "SET_CART_LOADING", payload: false });
  };

  const updateCartQuantity = async (cart, quantityChange) => {
    try {
      if (cart.quantity + quantityChange === 0) {
        removeItem(cart);
      } else {
        const response = await fetch(
          `${process.env.REACT_APP_BASEURL}/auth/user/cart/update/${cart._id}`,
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
              itemId: cart._id,
              quantity: cart.quantity + quantityChange,
            }),
          }
        );

        if (response.ok) {
          const updatedCart = await response.json();
          dispatch({
            type: "UPDATE_CART",
            payload: updatedCart,
          });
          fetchUserCart();
          return true;
        } else {
          dispatch({ type: "SET_CART_ERROR", payload: response.statusText });
        }
      }
    } catch (error) {
      dispatch({ type: "SET_CART_ERROR", payload: error.message });
    }
  };

  const removeCartItem = async (cart) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/user/cart/remove/${cart._id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({
            itemId: cart._id,
          }),
        }
      );

      if (response.ok) {
        const updatedCart = await response.json();
        if (updatedCart.cart.items.length === 0) {
          localStorage.removeItem("cart");
        } else {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: updatedCart.cart,
          });
        }
        fetchUserCart();
        return true;
      } else {
        dispatch({ type: "SET_CART_ERROR", payload: response.statusText });
      }
    } catch (error) {
      dispatch({ type: "SET_CART_ERROR", payload: error.message });
    }
  };

  const isCartReady =
    (Array.isArray(cart) && cart.length > 0) ||
    cart.length === 0 ||
    state.cartLoading === false;

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <div className="container text-light">
      <h1 className="text-center my-4 border border-5 p-2">Shopping Cart</h1>
      {state.cartLoading && <p>Loading...</p>}
      {state.cartError && <p>Error updating cart: {state.cartError}</p>}
      {Object.keys(cart).length === 0 ? (
        <p className="text-center fs-3 text my-4 p-2">Your cart is empty. 😔</p>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column">
          {isCartReady &&
            Object.entries(cart).map(([key, cartItem]) => {
              if (cartItem) {
                const { productId, quantity } = cartItem;
                Loading.remove();

                return (
                  <div
                    className="card mb-3 mx-2"
                    key={productId._id}
                    style={
                      isMobile
                        ? {
                            fontSize: "0.8rem",
                            width: "90%",
                            lineHeight: "1rem",
                          }
                        : { width: "75%", height: "fit-content" }
                    }
                  >
                    <div className={isMobile ? "d-flex" : "row g-0"}>
                      <div className="col-lg-4 col-md-4 overflow-hidden">
                        <img
                          src={productId.imageUrl}
                          alt={productId.name}
                          className={
                            isMobile
                              ? "w-100 h-100 img-fluid"
                              : "img-fluid h-100"
                          }
                        />
                      </div>
                      <div className="col-7">
                        <div className="card-body">
                          <h5 className="card-title">{productId.name}</h5>
                          <p className="card-text">{productId.new_price}</p>
                          <p className="card-text text-muted">
                            {productId.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <div>
                        <p className="card-text py-2">
                          Qty:{" "}
                          <button
                            className="border border-none p-0 mx-1"
                            onClick={() => decreaseQuantity(cartItem)}
                          >
                            <i className="fa-solid fa-square-minus fa-lg"></i>
                          </button>
                          <span>{quantity}</span>
                          <button
                            className="border border-0 p-0 mx-1"
                            onClick={() => increaseQuantity(cartItem)}
                          >
                            <i className="fa-solid fa-square-plus fa-lg"></i>
                          </button>
                        </p>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          style={
                            isMobile
                              ? {
                                  fontSize: "0.8rem",
                                }
                              : {}
                          }
                          onClick={() => removeItem(cartItem)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else {
                console.error("Invalid cart item at key", key);
                return null;
              }
            })}{" "}
          {!isCartReady && (
            <p className="text-center fs-3 text my-4 p-2">
              {Loading.pulse("Loading your cart...")}
            </p>
          )}
          <div className="mt-4 text-center">
            <div className="border border-5 px-4 py-2 mb-3">
              Total $ {total.toFixed(2)}
            </div>
            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
