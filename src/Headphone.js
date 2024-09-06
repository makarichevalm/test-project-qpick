import React from "react";
import "./Headphone.css";

export default function Headphone({ ident, photo, title, price, score }) {
  console.log(photo);
  return (
    <div
      className="mainBlock w-25 shadow-lg p-3 mb-4 bg-body"
      id={"hp_" + ident}
    >
      <div className="hpPhone">
        <img alt="Наушники" src={photo} />
      </div>
      <div className="hpTitle">{title}</div>
      <div className="score">
        <img alt="Рейтинг" />
        <div className="scoreText">{score}</div>
      </div>
      <div className="hpPrice">{price}</div>
      <button>Купить</button>
    </div>
  );
}
