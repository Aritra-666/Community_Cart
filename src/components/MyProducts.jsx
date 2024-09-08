import React from 'react'
import { useState,useEffect } from 'react'
import MyProductStyle from './MyProducts.module.css'
import AddProduct from './AddProduct'


export default function MyProducts() {

  const [SellerID,setSellerID]=useState("#####")
  const [toggle,settoggle]=useState(false)
  
  useEffect(() => {
    if(toggle){
         document.getElementById("plus").style.transform='rotate(45deg)'
    }else{
         document.getElementById("plus").style.transform='rotate(0deg)'
    }
  
    
  }, [toggle])
  




   const getProducts = async () => {
    let req =  await fetch("http://localhost:3000/getownproducts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({cookieID : getCookie("cookieID")}),
      });

      if(req.ok){
        settoggle(false)
      }else{
        console.log(req)
      }
   }
   

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
    <div onLoad={() => { getProducts()  }} className={MyProductStyle.MyProductpage}>
      <div className={MyProductStyle.nav}>
        <p>My Products</p>
        <div  onClick={()=>{ toggle?(settoggle(false)):(settoggle(true)) }} className={MyProductStyle.plus}> <p id='plus'>+</p>  </div>
        {toggle && <AddProduct/>}
 
      </div>
    </div>
  )
}
