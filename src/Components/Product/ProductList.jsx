import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { Context } from "../../context/cartReducer";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const ProductList = ({ products }) => {
  const { dispatch } = useContext(Context);

  const addToCartHandler = async (product) => {
    try {
      // Assuming productId is unique to each product
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/user/cart/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ productId: product._id, quantity: 1 }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // Update local state using the cartReducer if the request was successful
        if (data.message === "Item added to cart.") {
          dispatch({ type: "ADD_TO_CART", payload: product });
          Notify.success("Item added to cart", {
            timeout: 500,
            showOnlyTheLastOne: true,
          });
        } else {
          console.error("Error adding item to cart: Invalid payload structure");
        }
      } else {
        // Handle errors appropriately
        Notify.failure("Please login to continue");
        console.error("Error adding item to cart:", data.message);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  };

  return (
    <>
      {products.map((product) => (
        <Product
          key={product._id}
          name={product.name}
          description={product.description}
          category={product.category}
          imageUrl={product.imageUrl}
          old_price={product.old_price}
          new_price={product.new_price}
          addToCart={() => addToCartHandler(product)}
        />
      ))}
    </>
  );
};

export default ProductList;
