import React from 'react';
import Headphone from './Headphone';

export const headphones = [
  {
    id: 0,
    img: './img/hp1.png',
    title: 'Apple BYZ S8521',
    price: '2927 ₽',
    score: 4.7,
  },
  {
    id: 1,
    img: './img/hp6.png',
    title: 'Apple EarPods',
    price: '2327 ₽',
    score: 4.5,
  },
  {
    id: 2,
    img: './img/hp2.png',
    title: 'Apple EarPods',
    price: '2327 ₽',
    score: 4.5,
  },
];

function ShowHeadphones() {
  return (
    <div className="container hpList">
      {headphones.map((headphone) => (
        <Headphone key={headphone.id} props={headphone} />
      ))}
    </div>
  );
}

export default ShowHeadphones;

export const bluetooth = [
  {
    id: 0,
    img: './img/hp3.png',
    title: 'Apple AirPods',
    price: '9527 ₽',
    score: 4.7,
  },
  {
    id: 1,
    img: './img/hp4.png',
    title: 'GERLAX GH-04',
    price: '6527 ₽',
    score: 4.7,
  },
  {
    id: 2,
    img: './img/hp5.png',
    title: 'BOROFONE BO4',
    price: '7527 ₽',
    score: 4.7,
  },
];
