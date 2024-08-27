import React,{useState} from "react";
import ProductStyle from "./Product.module.css";

export default function Product(props) {



  const[AddedToCart,setAddedToCart]=useState(false)

  const addcart=() => {
    setAddedToCart(true)
  }
  

  return (
   
    <div className={ProductStyle.product}>

      <div className={ProductStyle.productdetails}>
      
      <img src="Mobile.png" className={ProductStyle.productIMG} alt=''/>

      </div>

      <div className={ProductStyle.productname}>{props.Name}</div>

      <div className={ProductStyle.productprice}>{props.Price}</div>

      <div className={ProductStyle.addcart} onClick={addcart}>{AddedToCart? <img className={ProductStyle.done} src="DONE.png"/> : <p>Add to cart</p> }</div>

      

    </div>
  );
}



