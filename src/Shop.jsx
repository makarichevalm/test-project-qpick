import React from "react";
import "./Shop.css";
import Footer from "./Footer";
import Header from "./Header";
import {ShowHeadphones} from "./infoHP";

function Shop() {
  console.log("sess", sessionStorage);
  return (
    <div className="Shop min-vh-100 d-flex flex-column">
      <Header />
      <div className="container">
        <div className="TitleApp ms-5">Наушники</div>
        <ShowHeadphones type="wire" />
        <div className="TitleApp ms-5"> Беспроводные наушники</div>
        <ShowHeadphones type="wireless" />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;