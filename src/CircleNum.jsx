import React from 'react'
import './CircleNum.css'

function CircleNum({text, font, size}) {
  return (
    <div className='CircleNum' style={{height: size, width: size}}>
      <div className='text' style={{fontSize: font}}>{text}</div>
    </div>
  )
}

export default CircleNum