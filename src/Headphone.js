import React from "react";
import "./Headphone.css";
import star from "./star.svg";

function Headphone({ props }) {
  return (
    <div
      className="col mainBlock d-flex flex-column justify-content-end shadow-lg p-4 mt-4 me-4 bg-body"
      style={{ width: "29%" }}
      id={"hp_" + props.id}
    >
      <div className="hpPhone d-flex justify-content-center pb-5">
        <img src={props.img} alt="Наушники" />
      </div>
      <div className="d-flex align-items-end justify-content-between flex-row">
        <div className="hpBlockline d-flex flex-column">
          <div className="hpTitle mb-3">{props.title}</div>
          <div className="score">
            <img src={star} alt="Рейтинг" className="me-2" />
            {props.score}
          </div>
        </div>
        <div className="hpBlockline d-flex flex-column">
          <div className="hpPrice d-flex justify-content-end mb-3">
            {props.price}
          </div>
          <button type="button" className="btnBuy">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headphone;
