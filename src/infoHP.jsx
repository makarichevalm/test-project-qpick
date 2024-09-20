import React from "react";
import Headphone from "./Headphone";
import CartProduct from "./CartProduct";

export const headphones = [
  {
    id: 0,
    type: "wire",
    img: "./img/hp1.png",
    title: "Apple BYZ S8521",
    price: 2927,
    score: 4.7,
  },
  {
    id: 1,
    type: "wire",
    img: "./img/hp6.png",
    title: "Apple EarPods",
    price: 2327,
    score: 4.5,
  },
  {
    id: 2,
    type: "wire",
    img: "./img/hp2.png",
    title: "Apple EarPods",
    price: 2327,
    score: 4.5,
  },
  {
    id: 3,
    type: "wire",
    img: "./img/hp1.png",
    title: "Apple BYZ S8521",
    price: 2927,
    score: 4.7,
  },
  {
    id: 4,
    type: "wire",
    img: "./img/hp6.png",
    title: "Apple EarPods",
    price: 2327,
    score: 4.5,
  },
  {
    id: 5,
    type: "wire",
    img: "./img/hp2.png",
    title: "Apple EarPods",
    price: 2327,
    score: 4.5,
  },
  {
    id: 6,
    type: "wireless",
    img: "./img/hp3.png",
    title: "Apple AirPods",
    price: 9527,
    score: 4.7,
  },
  {
    id: 7,
    type: "wireless",
    img: "./img/hp4.png",
    title: "GERLAX GH-04",
    price: 6527,
    score: 4.7,
  },
  {
    id: 8,
    type: "wireless",
    img: "./img/hp5.png",
    title: "BOROFONE BO4",
    price: 7527,
    score: 4.7,
  },
];

export function ShowHeadphones({ type }) {
  const wireHP = headphones.filter((headphone) => headphone.type === type);
  return (
    <div className="container hpList">
      <div className="row row-cols-3 d-flex justify-content-center">
        {wireHP.map((headphone) => (
          <Headphone key={headphone.id} props={headphone} />
        ))}
      </div>
    </div>
  );
}
export default function ShowCartProducts(){
  const dataSession = JSON.parse(sessionStorage.getItem('cartProducts'));
  console.log(JSON.stringify(dataSession));
  if (!dataSession) {
    return (
      <div className="container cartList">
        <p>Корзина пуста</p>
      </div>
    );
  }
  const products = [];
  for (const key of dataSession) {
    let elem = headphones.find(o => o.id === key.id);
    if (elem) {
      products.push(elem);
    }
  }
  return (
    <div className="container cartList">
        {products.map((headphone) => (
          <CartProduct key={headphone.id} props={headphone} />
        ))}
    </div>
  );
}