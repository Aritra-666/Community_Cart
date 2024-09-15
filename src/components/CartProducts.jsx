import React from "react";
import { useState } from "react";
import CartProductsStyle from "./CartProducts.module.css";

export default function CartProducts(props) {

    
    const[name,setname]= useState(null)
    const[Price,setPrice]= useState(null)
    const[unit,setunit]= useState(null)
    const [quantity,setquantity]=useState(props.Quantity)
    const[url,seturl]= useState("default.png")

    const loadimg = async (ProductID) => {
      

        let req =  await fetch("http://localhost:3000/ProductsImage", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ID: ProductID }),
          });


          if(req.ok){
  
            let res = await req.json();
           
            seturl(res.url)
            //  document.getElementById(ProductID).src=res.url

           } else {
               
              console.error(`ERROR:${req.status},${req.statusText}`);
              alert(`ERROR:${req.status},${req.statusText}`);
          
           }



    }


    const operation = async (type, ProductID) => {
    

      let req =  await fetch("http://localhost:3000/cartOperations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({type: type , ProductID:ProductID , CookieID : getCookie("cookieID")}),
      });

      if(req.ok){
  
        let res = await req.json();
      
        setquantity(res.update)



       } else {
           
          console.error(`ERROR:${req.status},${req.statusText}`);
          alert(`ERROR:${req.status},${req.statusText}`);
      
       }


    }
    
    


    const loadData = async (ProductID) => {
      

        let req =  await fetch("http://localhost:3000/getcartProductData", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ProductID:ProductID}),
          });


          if(req.ok){
  
            let res = await req.json();
           
            setname(res.name)
            setPrice(res.price)
            setunit(res.unit)
            await loadimg(ProductID)


           } else {
               
              console.error(`ERROR:${req.status},${req.statusText}`);
              alert(`ERROR:${req.status},${req.statusText}`);
          
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
    <div onLoad={()=>{loadData(props.ID)}} className={CartProductsStyle.product}>
      <div className={CartProductsStyle.productdetails}>

        <img 
          src={url}
          id={props.ID}
          className={CartProductsStyle.productIMG}
          alt=""
        />
      </div>

      <div className={CartProductsStyle.productname}>{name}</div>

      <div className={CartProductsStyle.productprice}>
        {Price}/{unit}
      </div>

      <div className={CartProductsStyle.operations}>

        <div id="decrement" onClick={() => {operation('-', props.ID)}} className={CartProductsStyle.decrement}>-</div>
        <div id="numbers" className={CartProductsStyle.numbers}>{quantity}</div>
        <div id="increment" onClick={() => {operation('+', props.ID)}}  className={CartProductsStyle.increment}>+</div>

      </div>
    </div>
  );
}
