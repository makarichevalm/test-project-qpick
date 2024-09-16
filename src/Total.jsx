import React from "react";
import "./Total.css";

function Total() {
  return (
    <div
      className="Total col-4 d-flex flex-column shadow m-3 bg-body"
      style={{ height: "120px" }}
    >
      <div className="totalText d-flex justify-content-between mt-4">
        <div className="tText ms-4">Итого</div>
        <div className="totalSum me-4">2927 ₽</div>
      </div>
      <div className="totalButton mt-auto">
        <button type="button" className="orderBtn w-100">
          Перейти к оформлению
        </button>
      </div>
    </div>
  );
}

export default Total;
