import React, { createContext, useEffect, useState } from "react";
import "./Cart.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Total from "../../components/Total/Total";
import ShowCartProducts, {headphones} from "../infoHP";
import { CountContext } from "../../pages/Shop/Shop";

export const SummContext = createContext();
function Cart() {
  const [countProducts, setCountProducts] = useState(0);
  const [summValue, setSummValue] = useState(0);

  useEffect(() => {
    const dataSession = JSON.parse(sessionStorage.getItem('cartProducts'));
    let sum = 0; 
    if (dataSession) {
      const products = [];
      for (const key of dataSession) {
        let elem = headphones.find(o => o.id === key.id);
        if (elem) {
          products.push(elem);
        }
      }
    sum = products.reduce((total, headphone) => total + headphone.price, 0); 
  }
  setSummValue(sum);
  },[])
  return (
    <div className="Cart min-vh-100 d-flex flex-column">
      <CountContext.Provider value={{countProducts, setCountProducts}}>
      <Header />
      </CountContext.Provider>
      <div className="container">
        <div className="TitleCart ms-5">Корзина</div>
        <div className="d-flex flex-row">
          <SummContext.Provider value={{summValue, setSummValue}}>
          <div className="d-flex col-7 ms-4">
            <ShowCartProducts />
          </div>
          <div className="d-flex col-5 justify-content-center">
            <Total />
          </div>
          </SummContext.Provider>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;