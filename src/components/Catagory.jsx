import React from 'react'
import Catagoryicon from './Catagoryicon'
import CatagoryStyle from './Catagory.module.css'


export default function Catagory() {
  return (
    <div className={CatagoryStyle.catagory}>
     <div className={CatagoryStyle.list}>
     <Catagoryicon name='Mobile' IMGsrc='Mobile.png'/>
      <Catagoryicon name='TV' IMGsrc='TV.jpg'/>
      <Catagoryicon name='Fridge' IMGsrc='Fridge.jpeg'/>
      <Catagoryicon name='Laptop' IMGsrc='Laptop.jpg'/>
      <Catagoryicon name='AC' IMGsrc='AC.jpg'/>
     </div>
    </div>
  )
}
