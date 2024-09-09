import React from "react";
import "./Cart.css";
import Footer from "./Footer";
import Header from "./Header";
import CartProduct from "./CartProduct";

function Cart() {
  return (
    <div className="Cart min-vh-100 d-flex flex-column">
      <Header />
      <div className="container">
        <div className="TitleCart ms-5">Корзина</div>
        <div className="d-flex justify-content-center">
          <CartProduct />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
