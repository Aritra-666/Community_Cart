import React from 'react'
import CatagoryiconStyle from'./Catagoryicon.module.css'
export default function Catagoryicon(props) {
  return (
    <div className={CatagoryiconStyle.catagoryicon}>
      
      <img className={CatagoryiconStyle.catagoryiconIMG} src={props.IMGsrc} alt='' />

      <div className={CatagoryiconStyle.catagoryiconName}>{props.name}</div>

    </div>
  )
}
