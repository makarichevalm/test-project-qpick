import React from 'react'
import "./CartProduct.css"
import deleteButton from "./icons/delete.svg"


function CartProduct() {
  return (
    <div className="CartProduct col-6 d-flex flex-column justify-content-end shadow-sm p-4 m-3 bg-body">
      <div className="d-flex flex-row">
        <div className="hpPhone d-flex justify-content-center">
          <img src="./img/hp1.png" alt="Наушники" className='w-75 h-auto'/>
        </div>
        <div className="d-flex flex-column">
          <div className="">Apple BYZ S852I</div>
          <div className="">2927 ₽</div>
        </div>
        <div className="">
          <img src={deleteButton} alt="Удалить"/>
        </div>
      </div>
      <div className='countBlock'>
        <div><img/></div>
        <div>1</div>
        <div><img/></div>
      </div>
      <div className='sum'>2927 ₽</div>
    </div>
  )
}

export default CartProduct
