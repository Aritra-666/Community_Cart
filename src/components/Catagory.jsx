import React from 'react'
import Catagoryicon from './Catagoryicon'
import './Catagory.modules.css'


export default function Catagory() {
  return (
    <div className='catagory'>
     <div className="list">
     <Catagoryicon name='Mobile' IMGsrc='mobile.webp'/>
      <Catagoryicon name='TV' IMGsrc='TV.jpg'/>
      <Catagoryicon name='Fridge' IMGsrc='Fridge.jpeg'/>
      <Catagoryicon name='Laptop' IMGsrc='Laptop.jpg'/>
      <Catagoryicon name='AC' IMGsrc='AC.jpg'/>
     </div>
    </div>
  )
}
