import React from "react";
import "./Cart.css";
import Footer from "./Footer";
import Header from "./Header";
import CartProduct from "./CartProduct";
import Total from "./Total";

function Cart() {
  return (
    <div className="Cart min-vh-100 d-flex flex-column">
      <Header />
      <div className="container">
        <div className="TitleCart ms-5">Корзина</div>
        <div className="d-flex justify-content-around">
          <CartProduct />
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
