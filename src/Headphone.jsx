import React, {useState, useEffect} from "react";
import "./Headphone.css";
import star from "./icons/star.svg";

function Headphone({ props }) {
  const [textButton, setTextButton] = useState('Купить');
  useEffect(() => {
    const selectedItems = JSON.parse(sessionStorage.getItem('cartProducts')) || [];
    const hasItem = selectedItems.some((item) => item.id === props.id);
    if (hasItem) {
    setTextButton('В корзине');
    }
  }, [props.id]);
  const handleBuyClick = () => {
    const selectedItems = JSON.parse(sessionStorage.getItem('cartProducts')) || [];
    const existItem = selectedItems.find(i => i.id === props.id);
    if(!existItem){
      setTextButton('В корзине');
      let newObject = {id: props.id, state: true, count: 1};
      selectedItems.push(newObject);
      sessionStorage.setItem('cartProducts', JSON.stringify(selectedItems));
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
            {props.price} ₽
          </div>
          <button type="button" id={props.id} className="btnBuy"onClick={handleBuyClick}>{textButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headphone;
