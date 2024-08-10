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
      
      <img src={props.props.Src} className={ProductStyle.productIMG} alt=''/>

      </div>

      <div className={ProductStyle.productname}>Aritra</div>

      <div className={ProductStyle.productprice}>1,50,000/-</div>

      <div className={ProductStyle.addcart} onClick={addcart}>{AddedToCart? <img className={ProductStyle.done} src="DONE.png"/> : <p>Add to cart</p> }</div>

      

    </div>
  );
}
