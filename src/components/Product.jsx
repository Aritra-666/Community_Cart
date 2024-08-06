import React,{useState} from "react";
import "./Product.modules.css";

export default function Product(props) {

  const[AddedToCart,setAddedToCart]=useState(false)

  const addcart=() => {
    setAddedToCart(true)
  }
  

  return (
   
    <div className='product'>

      <div className="product-details">
      
      <img src={props.props.Src} className="productIMG" alt=''/>

      </div>

      <div className="productname">Aritra</div>

      <div className="productprice">1,50,000/-</div>

      <div className="add-cart" onClick={addcart}>{AddedToCart? <img className="done" src="DONE.png"/> : <p>Add to cart</p> }</div>

      

    </div>
  );
}
