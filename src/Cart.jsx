import React from "react";
import "./Cart.css";
import Footer from "./Footer";
import Header from "./Header";
import Total from "./Total";
import ShowCartProducts from "./infoHP";

function Cart() {
  return (
    <div className="Cart min-vh-100 d-flex flex-column">
      <Header />
      <div className="container">
        <div className="TitleCart ms-5">Корзина</div>
        <div className="d-flex justify-content-around">
          <ShowCartProducts />
          <Total />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
