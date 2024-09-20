import React, { createContext, useEffect, useState } from "react";
import "./Cart.css";
import Footer from "./Footer";
import Header from "./Header";
import Total from "./Total";
import ShowCartProducts, {headphones} from "./infoHP";

export const SummContext = createContext();
function Cart() {
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
      <Header />
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
