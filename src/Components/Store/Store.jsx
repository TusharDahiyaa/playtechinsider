import React, { useState, useEffect } from "react";
import "./store.css";
import ProductList from "../Product/ProductList";
import Admin from "../Product/Admin";
import Swal from "sweetalert2";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const Store = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [userRole, setUserRole] = useState("customer");
  const [filter, setFilter] = useState({
    category: "",
  });

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASEURL}/api/checkUserRole`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserRole(data.role || "customer");
        } else {
          setUserRole("customer");
        }

        if (response.status === 401) {
          Swal.fire({
            title: "<strong>Not Logged In</strong>",
            icon: "info",
            html: `
              Please  <a className="btn btn-primary mt-3 text-decoration-none" href="/login">login</a> to continue.
            `,
          });
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      Loading.dots();
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASEURL}/auth/api/products`
        );
        if (response.ok) {
          const data = await response.json();
          setInitialProducts(data);
          Loading.remove();
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = initialProducts.filter((product) => {
        const categoryMatch =
          !filter.category || product.category === filter.category;

        return categoryMatch;
      });

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filter, initialProducts]);

  const addProduct = (newProduct) => {
    setInitialProducts([...initialProducts, newProduct]);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const categories = [
    "Consoles",
    "Games",
    "Processors",
    "Graphics Cards",
    "Accessories",
    "Gaming Monitors",
    "Gaming Laptops",
    "Storage",
    // Add more categories as needed
  ];

  return (
    <>
      <div className="container text-light">
        <h1 className=" text-center my-4 border border-5 p-2">Store</h1>
        <div className="row">
          {userRole === "admin" ? (
            <>
              <Admin addProduct={addProduct} />
              <div className="filter-controls mb-3">
                <label htmlFor="category">Category:</label>
                <select
                  name="category"
                  className="form-select"
                  value={filter.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <ProductList products={filteredProducts} />
            </>
          ) : (
            <>
              <div className="row mx-1">
                <div className="col">
                  <div className="filter-controls mb-2">
                    <label htmlFor="category">Category:</label>
                    <select
                      name="category"
                      id="category"
                      className="form-select"
                      value={filter.category}
                      onChange={handleFilterChange}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <ProductList products={filteredProducts} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Store;
