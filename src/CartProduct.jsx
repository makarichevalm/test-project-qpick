import React, {useState} from "react";
import "./CartProduct.css";

function CartProduct({props}) {
  const [counter, setCounter] = useState(1);
  const handleDecrementClick = () => {
    if (counter > 1)
    setCounter(counter - 1);
  console.log("-1");
  }
  const handleIncrementClick = () => {
    setCounter(counter + 1);
    console.log("+1");
  }
  return (
    <div className="CartProduct col-6 d-flex flex-column justify-content-end shadow p-4 m-3 bg-body" id={"cp_" + props.id}>
      <div className="d-flex flex-row">
        <div>
          <div className="hpPhone d-flex justify-content-center">
            <img src={props.img} alt="Наушники" className="w-75 h-auto" />
          </div>
          <div className="countBlock d-flex flex-row justify-content-center">
            <div className="circle">
              <button className="minusBut" onClick={handleDecrementClick}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="#FFCE7F"/>
              <path d="M8 14H22V16H8V14Z" fill="white"/>
              </svg>
              </button>
            </div>
            <div className="cpCount mt-1 ms-4 me-3">{counter}</div>
            <div className="circle">
              <button className="plusBut" onClick={handleIncrementClick}>
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.2056" cy="15" r="15" fill="#FFCE7F"/>
              <path d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.20557V14H14.2056Z" fill="white"/>
              </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="cpTitle">{props.title}</div>
          <div className="cpPrice mt-2">{props.price}</div>
        </div>
        <div className="ms-auto d-flex align-items-end flex-column">
          <div className="imgDelete"><svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z" fill="#DF6464"/>
          </svg></div>
          <div className="cpSum mt-auto">2927 ₽</div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
