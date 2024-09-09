import React from "react";
import "./Cart.css";
import Footer from "./Footer";
import Header from "./Header";

function Cart() {
  return (
    <div className="Cart">
      <Header />
      <div className="container">
        <div className="TitleApp ms-5">Наушники</div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
