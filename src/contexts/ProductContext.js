import React, { createContext, useReducer, useEffect } from "react";

import { getProducts } from "../services/api";

// ----------------------------------------------------------------------

export const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload, loading: false, error: null };

    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const response = await getProducts();
        dispatch({ type: "SET_PRODUCTS", payload: response.data });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "Failed to fetch products" });
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
