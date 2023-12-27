import React, { useState } from "react";

export default function Admin({ addProduct }) {
  // Import necessary dependencies
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    old_price: "",
    new_price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the product data to the server
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const newProduct = await response.json();
        // Call the parent addProduct function to update the products state
        addProduct(newProduct);
        //Reset form after submission
        setFormData({
          name: "",
          category: "",
          description: "",
          old_price: "",
          new_price: "",
          imageUrl: "",
        });
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <div>
      <h2 className="text-center px-2 py-1">Add Product (Admin access only)</h2>
      <form
        className={
          isMobile
            ? "mx-auto border border-5 py-4 px-3 mb-5"
            : "w-50 mx-auto border border-5 py-3 px-2 mb-3"
        }
        onSubmit={handleSubmit}
      >
        {/* Input fields for product details */}
        {/* Add labels, input fields, and appropriate onChange handlers */}
        {/* Example: */}
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Product Name:{" "}
        </label>
        <input
          className="form-control mb-2"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter the product Name"
        />
        <label htmlFor="category" className="col-sm-3 col-form-label">
          Product Category:{" "}
        </label>
        <input
          className="form-control mb-2"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter the product category"
        />
        <label htmlFor="description" className="col-sm-3 col-form-label">
          Product Description:{" "}
        </label>
        <input
          className="form-control mb-2"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter the product description"
        />
        <label htmlFor="old_price" className="col-sm-3 col-form-label">
          Product Old Price:{" "}
        </label>
        <input
          className="form-control mb-2"
          type="text"
          name="old_price"
          value={formData.old_price}
          onChange={handleChange}
          placeholder="Enter the product Old Price"
        />
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Product New Price:{" "}
        </label>
        <input
          className="form-control mb-2"
          type="text"
          name="new_price"
          value={formData.new_price}
          onChange={handleChange}
          placeholder="Enter the product New Price"
        />
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Product Image URL:{" "}
        </label>
        <input
          className="form-control mb-3"
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Enter the product Image URL"
        />
        {/* Repeat for other fields */}
        <button className="btn btn-success" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
