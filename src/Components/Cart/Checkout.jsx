import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/cartReducer";

const Checkout = () => {
  const { state } = useContext(Context);
  const { cart } = state;

  const [total, setTotal] = useState(0);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const [errors, setErrors] = useState({});

  // Calculate total when cart changes
  useEffect(() => {
    let accumulator = 0;
    Object.entries(cart).forEach(([key, cartItem]) => {
      if (cartItem && cartItem.productId && cartItem.productId.new_price) {
        const priceString = cartItem.productId.new_price;
        const priceValue = Number(priceString.split("$")[1]);
        accumulator += priceValue * cartItem.quantity;
      }
    });
    setTotal(accumulator.toFixed(2));
  }, [cart]);

  // Function to map cart items for summary
  const renderCartItems = () => {
    return Object.entries(cart).map(([key, cartItem]) => {
      if (cartItem) {
        const { productId, quantity } = cartItem;
        const priceString = productId.new_price;
        const priceValue = Number(priceString.split("$")[1]);
        return (
          <div
            key={productId._id}
            className="d-flex justify-content-between align-items-center mb-2"
          >
            <div>
              <img
                src={productId.imageUrl}
                alt={productId.imageUrl}
                width="50"
                height="50"
              />
              <span className="ms-2">{productId.name}</span>
            </div>
            <div className="text-end">
              <span>Qty: {quantity}</span>
              <span className="ms-2">${priceValue * quantity}</span>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillingInfo({ ...billingInfo, [name]: value });

    // Validate specific fields based on input type
    if (name === "email") {
      const emailRegex =
        // eslint-disable-next-line
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const isValidEmail = emailRegex.test(value);
      if (!isValidEmail) {
        setErrors({ ...errors, email: "Please enter a valid email address." });
      } else {
        setErrors({ ...errors, email: "" });
      }
    } else if (name === "phone") {
      const phoneRegex = /^\d+$/;
      const isValidPhone = phoneRegex.test(value);
      if (!isValidPhone) {
        setErrors({ ...errors, phone: "Please enter a valid phone number." });
      } else {
        setErrors({ ...errors, phone: "" });
      }
    } else {
      if (!value) {
        setErrors({ ...errors, [name]: "This field is required." });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    // Check for any remaining errors
    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) {
      alert("Please check the details before placing your order.");
      return;
    }

    // const orderData = {
    //   cartItems: cart,
    //   billingInfo,
    // };

    // console.log("Submitting order", orderData);
    window.location.href = "/paymentPage";
  };

  return (
    <div className="container text-light">
      <h1 className="text-center my-4 border border-5 p-2">Checkout</h1>

      <div className="row">
        <div className="col-md-12">
          <h2>Order Summary</h2>
          <hr />
          {cart.length > 0 ? (
            <>
              {renderCartItems()}
              <hr />
              <div className="d-flex justify-content-end">
                <span className="fw-bold fs-5">Total:</span>
                <span className="ms-2 fs-5">$ {total}</span>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-md-8 mx-auto border border-5 p-4 mt-4">
          <h2>Billing Information</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={billingInfo.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && (
                <p className="text-danger small mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <p className="text-danger small mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                value={billingInfo.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-danger small mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && (
                <p className="text-danger small mt-1">{errors.address}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={billingInfo.city}
                onChange={handleInputChange}
                required
              />
              {errors.city && (
                <p className="text-danger small mt-1">{errors.city}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                className="form-control"
                id="state"
                name="state"
                value={billingInfo.state}
                onChange={handleInputChange}
                required
              />
              {errors.state && (
                <p className="text-danger small mt-1">{errors.state}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={billingInfo.zipcode}
                onChange={handleInputChange}
                required
              />
              {errors.zipcode && (
                <p className="text-danger small mt-1">{errors.zipcode}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/cart" className="btn btn-outline-secondary mr-2">
          Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
