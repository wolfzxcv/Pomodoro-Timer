import React, { useState, createContext } from 'react';

export const ContextProvider = createContext();

export default props => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  const value = {
    product,
    setProduct,
    products,
    setProducts,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
