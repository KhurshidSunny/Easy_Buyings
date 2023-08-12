import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";

const ProductContext = createContext();

const BASE_URL = "http://localhost:9000";

const initialState = {
  products: [],
  index: 0,
  currentItem: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "product/loaded":
      return {
        ...state,
        products: action.payload,
      };
    case "currentProduct/loaded":
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      throw new Error("Unkown action");
  }
}

function ProductProvider({ children }) {
  const [{ products, currentItem }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function getProducts() {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      // dispatch({ type: "currentProduct/loaded", payload: data[0] });
      dispatch({ type: "product/loaded", payload: data });
    }
    getProducts();
  }, []);

  async function getCurrentItem(id) {
    // if (id === currentItem.id) return;
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`);
      const data = await res.json();
      dispatch({ type: "currentProduct/loaded", payload: data });
    } catch (err) {
      alert(err.message);
    }
  }

  console.log(currentItem);

  return (
    <ProductContext.Provider
      value={{
        products,
        getCurrentItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("the product provider is used outside the context");
  return context;
}

export { ProductProvider, useProducts };
