import React, { createContext, useState } from "react";
import "./Cart.css";
import Footer from "./Footer";
import Header from "./Header";
import Total from "./Total";
import ShowCartProducts from "./infoHP";

export const SummContext = createContext();
function Cart() {
  const [summValue, setSummValue] = useState(0);
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
            <Total sum={summValue}/>
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
