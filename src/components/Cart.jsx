import React from 'react'
import { useState ,useEffect } from 'react'
import CartProducts from './CartProducts.jsx'
import CartStyle from './Cart.module.css'

export default function Cart() {

  const[CartProduct,setCartProduct]=useState(0)

  const getCartProduct = async () => {

    let req =  await fetch("http://localhost:3000/getCartProducts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({cookieID: getCookie("cookieID")}),
    });

    if (req.ok) {
      let res = await req.json();

      if (res !== null) {
       
        console.log(res)
        setCartProduct(res);
      }
    } else {
      console.error(`ERROR:${req.status},${req.statusText}`);
      alert(`ERROR:${req.status},${req.statusText}`);
    }
  }

  useEffect(() => {getCartProduct()}, []) 



  function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(";");
    for (let cookie of cookiesArray) {
      cookie = cookie.trim();

      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }

    return null;
  }


  return (
    <div className={CartStyle.CartPage}>

<div  className={CartStyle.productcontainer}>
      
      {CartProduct ? 
      CartProduct.map((product,index) => {
        return (
          <CartProducts key={index} ID={product.ProductID}/>
        );
      }
      ) 
      : 
      <p>Loading products...</p>
      }
    </div>
      <div className={CartStyle.OrderSummery}>
        <div className={CartStyle.TotalAmount}>
        Total <div id='total' className={CartStyle.Total}>₹300</div>
        </div>
        <button className={CartStyle.btn17}>
  <span className={CartStyle.textcontainer}>
    <span className={CartStyle.text}>Order</span>
  </span>
</button>
      </div>
    </div>
  )
}
