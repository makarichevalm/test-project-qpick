import React from "react";
import "./Shop.css";
import Footer from "./Footer";
import Header from "./Header";
import ShowHeadphones from "./infoHP";

function Shop() {
  return (
    <div className="Shop">
      <Header />
      <div className="container">
        <div className="TitleApp ms-5">Наушники</div>
        <ShowHeadphones type="wire" />
        <div className="TitleApp ms-5"> Беспроводные наушники</div>
        <ShowHeadphones type="wireless" />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
