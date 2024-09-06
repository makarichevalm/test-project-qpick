import React from 'react';
import './Headphone.css';
import star from './star.svg';

function Headphone({ props }) {
  return (
    <div
      className="mainBlock w-25 shadow-lg p-3 mb-4 bg-body"
      id={'hp_' + props.id}
    >
      <div className="hpPhone">
        <img src={props.img} alt="Наушники" />
      </div>
      <div className="hpTitle">{props.title}</div>
      <div className="score">
        <img src={star} alt="Рейтинг" />
        <div className="scoreText">{props.score}</div>
      </div>
      <div className="hpPrice">{props.price}</div>
      <button>Купить</button>
    </div>
  );
}

export default Headphone;
