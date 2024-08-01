import React from 'react'
import './Product.modules.css'

export default function Product(props) {
  return (
   
    <div className='product'>
      
      <img src={props.props.Src} className="productIMG" alt=''/>

      <div className="productname">{props.props.Src}</div>


      <div className="productprice">1,50,000/-</div>
    </div>
  )
}
