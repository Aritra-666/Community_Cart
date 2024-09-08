import React from 'react'
import Catagoryicon from './Catagoryicon'
import CatagoryStyle from './Catagory.module.css'


export default function Catagory() {
  return (
    <div className={CatagoryStyle.catagory}>
     <div className={CatagoryStyle.list}>
     <Catagoryicon name='Rice' IMGsrc='Rice.jpeg'/>
      <Catagoryicon name='Dal' IMGsrc='Dal.jpg'/>
      <Catagoryicon name='Potato' IMGsrc='Potato.jpeg'/>
      <Catagoryicon name='Tomato' IMGsrc='Tomato.jpeg'/>
      <Catagoryicon name='Apple' IMGsrc='Apple.jpg'/>
     </div>
    </div>
  )
}
