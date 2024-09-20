import React, {createContext, useState} from "react";
import "./Shop.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {ShowHeadphones} from "../infoHP";

export const CountContext = createContext();
function Shop() {
  const [countProducts, setCountProducts] = useState(0);
  return (
    <div className="Shop min-vh-100 d-flex flex-column">
      <CountContext.Provider value={{countProducts, setCountProducts}}>
      <Header />
      <div className="container">
        <div className="TitleApp ms-5">Наушники</div>
        <ShowHeadphones type="wire" />
        <div className="TitleApp ms-5"> Беспроводные наушники</div>
        <ShowHeadphones type="wireless" />
      </div>
      </CountContext.Provider>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;