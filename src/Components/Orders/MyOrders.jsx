import React, { useEffect, useState } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default function MyOrders() {
  const [myOrders, setMyOrders] = useState({});
  const userToken = localStorage.getItem("access_token");

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/orders`,
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
        setMyOrders(data);
      } else {
        console.error("Error fetching user orders:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, []);

  const ordersReady = Object.values(myOrders).length > 0;

  function calculateTotalPrice(items) {
    return items.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace("$", ""));
      const quantity = item.quantity;
      return total + itemPrice * quantity; // Multiply price by quantity
    }, 0);
  }

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <>
      <div className="container my-5 text-light">
        <h1 className="text-center my-4 border border-5 p-2">Your Orders</h1>
        {ordersReady && (
          <div className="row">
            {Object.values(myOrders).map((orderItem) => {
              if (orderItem) {
                Loading.remove();
                return (
                  <div className="col-md-12 col-sm-12 mb-4" key={orderItem._id}>
                    <div className="card">
                      <div className="card-body">
                        <div
                          className="d-flex justify-content-between overflow-hidden"
                          style={isMobile ? { fontSize: "0.8rem" } : {}}
                        >
                          <div>
                            <h5
                              className="card-title"
                              style={isMobile ? { fontSize: "0.8rem" } : {}}
                            >
                              Order ID: {orderItem._id}
                            </h5>
                            <p className="card-text">
                              Date:{" "}
                              {new Date(orderItem.date).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="card-title text-end">
                            Payment Method: <br /> {orderItem.paymentMethod}
                          </p>
                        </div>
                        <ul
                          className="list-group list-group-flush"
                          style={isMobile ? { fontSize: "0.9rem" } : {}}
                        >
                          {orderItem.items.map((item) => {
                            return (
                              <li
                                className="list-group-item small"
                                key={item.productId}
                              >
                                {item.productName} - Quantity: {item.quantity}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div
                        className="card-footer text-muted"
                        style={isMobile ? { fontSize: "0.9rem" } : {}}
                      >
                        Total: ${calculateTotalPrice(orderItem.items)}{" "}
                      </div>
                      {
                        //Calculating total price
                      }
                    </div>
                  </div>
                );
              }
            })}
            {!ordersReady && (
              <p className="text-center fs-3 text my-4 p-2">
                {Loading.pulse("Loading your orders...")}
              </p>
            )}
          </div>
        )}
        {Object.values(myOrders).length === 0 && (
          <h4 className="text-center my-4">No orders found.</h4>
        )}
      </div>
    </>
  );
}
