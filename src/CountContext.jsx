 import React, { createContext, useContext, useState, useEffect } from 'react';

const CountContext = createContext();

export const useCount = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(sessionStorage.getItem('cartProducts')) || [];
    setCartProducts(storedProducts);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (productId) => {
    const existItem = cartProducts.find(i => i.id === productId);
    if (!existItem) {
      let newObject = {id: productId, state: true, count: 1};
      setCartProducts([...cartProducts, newObject]);
    }
  };
  return (
    <CountContext.Provider value={{ cartProducts, addToCart }}>
      {children}
    </CountContext.Provider>
  );
};