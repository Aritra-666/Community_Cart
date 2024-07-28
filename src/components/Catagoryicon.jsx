import React from 'react'
import './Catagoryicon.modules.css'
export default function Catagoryicon(props) {
  return (
    <div className='catagoryicon'>
      
      <img className='catagoryiconIMG' src={props.IMGsrc} alt='' />

      <div className="catagoryiconName">{props.name}</div>

    </div>
  )
}
