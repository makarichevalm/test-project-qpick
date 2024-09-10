import React from "react";
import "./CartProduct.css";
import deleteButton from "./icons/delete.svg";

function CartProduct() {
  return (
    <div className="CartProduct col-6 d-flex flex-column justify-content-end shadow p-4 m-3 bg-body">
      <div className="d-flex flex-row">
        <div className="">
          <div className="hpPhone d-flex justify-content-center">
            <img src="./img/hp1.png" alt="Наушники" className="w-75 h-auto" />
          </div>
          <div className="countBlock d-flex flex-row justify-content-center">
            <div className="circle">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="#FFCE7F"/>
              <path d="M8 14H22V16H8V14Z" fill="white"/>
              </svg>
            </div>
            <div className="cpCount mt-1 ms-4 me-4">1</div>
            <div className="circle">
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.2056" cy="15" r="15" fill="#FFCE7F"/>
              <path d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.20557V14H14.2056Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="cpTitle">Apple BYZ S852I</div>
          <div className="cpPrice mt-2">2927 ₽</div>
        </div>
        <div className="ms-auto d-flex align-items-end flex-column">
          <img src={deleteButton} alt="Удалить" />

          <div className="cpSum mt-auto">2927 ₽</div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
