import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/cartReducer";
import { useParams } from "react-router-dom";

const OrderConfirmation = () => {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;
  const [cartClearedSuccess, setCartClearedSuccess] = useState("");
  const userToken = localStorage.getItem("access_token");
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { orderId } = useParams();
  const [cartItemsInfo, setCartItemsInfo] = useState("");

  const cleartCartItem = async () => {
    try {
      setCartItemsInfo(cart);
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/user/cart/clearCart`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.ok) {
        dispatch({ type: "CLEAR_CART" });
        return true;
      } else {
        dispatch({ type: "SET_CART_ERROR", payload: response.statusText });
      }
    } catch (error) {
      dispatch({ type: "SET_CART_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    setEstimatedDeliveryDate(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));
  }, []);

  useEffect(() => {
    cleartCartItem()
      .then(() => {
        setIsLoading(false);
        setCartClearedSuccess(true);
      })
      .catch((error) => {
        // Handling errors
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container text-light">
      <h1 className="text-center my-4 border border-5 p-2">
        Thank you for your order!
      </h1>
      <div className="mt-4">
        <h3 className="text-center mb-4">
          Your order number {orderId} is on its way!
        </h3>
        <p className="text-center">
          Sit back and relax, your items will be delivered in estimated 2-3
          days(
          {estimatedDeliveryDate &&
            estimatedDeliveryDate.toLocaleDateString("en-US", {
              dateStyle: "full",
            })}
          .)
        </p>
        <div className="container text-center">
          <h4 className="mt-5 mb-2">Ordered Items:</h4>
          <div className="container row">
            {isLoading && <div>Loading...</div>}
            {cartItemsInfo &&
              // eslint-disable-next-line
              Object.entries(cartItemsInfo).map(([key, cartItem]) => {
                if (cartItem) {
                  const { productId, quantity } = cartItem;
                  return (
                    <div
                      key={cartItem._id}
                      className="col-md-3 bg-transparent text-light mb-3"
                    >
                      <img
                        src={productId.imageUrl}
                        alt="Product_image"
                        width={150}
                        height={120}
                      />
                      <br />
                      {productId.name} <br />
                      Quantity: {quantity}
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
      {cartClearedSuccess && <div>Cart cleared successfully!</div>}
    </div>
  );
};

export default OrderConfirmation;
