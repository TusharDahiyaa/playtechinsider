import React, { useContext, useState } from "react";
import { Context } from "../../context/cartReducer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const PaymentOptions = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      phoneNumber: "",
      upiId: "",
    },
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [cardError, setCardError] = useState("");
  const [paytmError, setPaytmError] = useState("");
  const [upiError, setUpiError] = useState("");
  const { state, dispatch } = useContext(Context);
  const { cart } = state;
  const userToken = localStorage.getItem("access_token");

  const onCardSubmit = (data) => {
    if (!data.cardNumber.match(/^[0-9]{16}$/)) {
      setCardError("Invalid card number.");
      return;
    } else {
      setCardError("");
      createOrder(`Credit Card/Debit Card: ${data.cardNumber}`);
    }
  };

  const onPaytmSubmit = (data) => {
    if (!data.phoneNumber.match(/^[0-9]{10}$/)) {
      setPaytmError("Invalid phone number.");
      return;
    } else {
      setPaytmError("");
      createOrder(`Paytm Number: ${data.phoneNumber}`);
    }
  };

  const onUpiSubmit = (data) => {
    if (!data.upiId) {
      setUpiError("UPI ID is required.");
      return;
    } else {
      setUpiError("");
      createOrder(`UPI ID: ${data.upiId}`);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const createOrder = async (paymentMethod) => {
    try {
      Loading.hourglass("Confirming order...");
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/orders`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          // Assuming cart data is already prepared in a suitable format
          body: JSON.stringify({ cart: cart, PaymentMethod: paymentMethod }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const generatedOrderId = data.orderId;
        setTimeout(() => {
          Loading.remove();
          navigate(`/confirmation/${generatedOrderId}`);
        }, 2000);
      } else {
        // Handle error, e.g., display error message to the user
        const errorData = await response.json();
        dispatch({ type: "SET_ORDER_ERROR", payload: errorData.error });
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
      dispatch({ type: "SET_ORDER_ERROR", payload: "Failed to create order" });
    }
  };

  return (
    <div className="container mt-5 mb-5 text-light">
      <h1 className="text-center mb-4">Select your payment method</h1>
      <div className="row px-3">
        <button
          className={`btn btn-outline-light col-md-3 mb-3 me-3 rounded mx-auto ${
            selectedPaymentMethod === "card" ? "active" : ""
          }`}
          onClick={() => handlePaymentMethodChange("card")}
        >
          Credit Card/ Debit Card
          <img
            src="images/atm-card.png"
            width={40}
            height={35}
            alt=""
            className="ms-2"
          />
        </button>
        <button
          className={`btn btn-outline-light col-md-3 mb-3 me-3 rounded mx-auto ${
            selectedPaymentMethod === "paytm" ? "active" : ""
          }`}
          onClick={() => handlePaymentMethodChange("paytm")}
        >
          Paytm
          <img
            src="images/paytm-icon.png"
            alt="Paytm logo"
            width={40}
            className="ms-2"
          />
        </button>
        <button
          className={`btn btn-outline-light col-md-3 mb-3 rounded mx-auto ${
            selectedPaymentMethod === "upi" ? "active" : ""
          }`}
          onClick={() => handlePaymentMethodChange("upi")}
        >
          UPI
          <img
            src="images/upi-icon.png"
            alt="UPI logos"
            width={40}
            className="ms-2"
          />
        </button>
        {selectedPaymentMethod === "card" && (
          <>
            {/* Credit Card/ Debit Card section */}
            <div className="col-md-6 shadow p-4 rounded mx-auto">
              <h3 className="text-center">
                Credit Card/ Debit Card{" "}
                <img src="images/atm-card.png" width={40} alt="" />
              </h3>
              <hr />
              <form onSubmit={handleSubmit(onCardSubmit)}>
                <div className="mb-3">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="16-digits card number(without spaces)"
                    className="form-control"
                    {...register("cardNumber", {
                      required: true,
                      minLength: 16,
                      maxLength: 16,
                    })}
                  />
                  {errors.cardNumber && (
                    <p className="text-danger small mt-1">
                      {errors.cardNumber.message || "Card number is required."}
                    </p>
                  )}
                  {cardError && (
                    <p className="text-danger small mt-1">{cardError}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate">Expiry Date:</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className="form-control"
                    placeholder="MM/YY"
                    {...register("expiryDate", {
                      required: true,
                      pattern: /^\d{2}\/\d{2}$/,
                    })}
                  />
                  {errors.expiryDate && (
                    <p className="text-danger small mt-1">
                      {errors.expiryDate.message ||
                        "Invalid expiry date format."}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv">CVV:</label>
                  <input
                    type="password"
                    id="cvv"
                    name="cvv"
                    className="form-control"
                    {...register("cvv", {
                      required: true,
                      minLength: 3,
                      maxLength: 3,
                    })}
                  />
                  {errors.cvv && (
                    <p className="text-danger small mt-1">
                      {errors.cvv.message || "CVV is required."}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Pay with Card{" "}
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  )}
                </button>
              </form>
            </div>
          </>
        )}
        {selectedPaymentMethod === "paytm" && (
          <>
            {/* Paytm section */}
            <div className="col-md-6 shadow p-4 rounded mx-auto">
              <h3 className="text-center">
                <img
                  src="images/paytm-icon.png"
                  className="bg-light-subtle border rounded p-2"
                  alt="Paytm logo"
                  width={100}
                />
              </h3>
              <form onSubmit={handleSubmit(onPaytmSubmit)}>
                <div className="mb-3 mt-2">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className="form-control"
                    {...register("phoneNumber", {
                      required: true,
                      minLength: 10,
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-danger small mt-1">
                      {errors.phoneNumber.message || "Invalid phone number."}
                    </p>
                  )}
                  {paytmError && (
                    <p className="text-danger small mt-1">{paytmError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Pay with Paytm{" "}
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  )}
                </button>
              </form>
            </div>
          </>
        )}
        {selectedPaymentMethod === "upi" && (
          <>
            {/* UPI section */}
            <div className="col-md-6 shadow p-4 rounded mx-auto">
              <h3 className="text-center">
                {" "}
                UPI <img src="images/upi-icon.png" alt="UPI logos" width={60} />
              </h3>
              <form onSubmit={handleSubmit(onUpiSubmit)}>
                <div className="mb-3 text-center">
                  <label htmlFor="upiId">UPI ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your UPI ID"
                    {...register("upiId", { required: true })}
                  />
                  {errors.upiId && (
                    <p className="text-danger small mt-1">
                      {errors.upiId.message || "UPI ID is required."}
                    </p>
                  )}
                  {upiError && (
                    <p className="text-danger small mt-1">{upiError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Pay with UPI{" "}
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentOptions;
