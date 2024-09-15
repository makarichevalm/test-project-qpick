import React, {useState, useEffect} from "react";
import "./Headphone.css";
import star from "./icons/star.svg";

function Headphone({ props }) {
  const [textButton, setTextButton] = useState('Купить');
  useEffect(() => {
    const clicked = JSON.parse(sessionStorage.getItem('clicked_buttons')) || {};
    if (clicked[props.id]) {
      setTextButton('В корзине');
    }
  }, [props.id]);
  const handleBuyClick = () => {
    let clicked = JSON.parse(sessionStorage.getItem('clicked_buttons')) || {};
    if(!clicked[props.id]){
      setTextButton('В корзине');
      clicked[props.id] = true;
      sessionStorage.setItem('clicked_buttons', JSON.stringify(clicked));
      window.location.reload();
    }
  };
  return (
    <div
      className="mainBlock d-flex flex-column justify-content-end shadow-sm p-4 m-3 bg-body"
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
          <button type="button" id={props.id} className="btnBuy"onClick={handleBuyClick}>{textButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headphone;
