import React,{useState,useEffect} from "react";
import ProductStyle from "./Product.module.css";

export default function Product(props) {



  const[AddedToCart,setAddedToCart]=useState(false)

  const addcart=async (ProductID) => {
    

        
    let req = await fetch("http://localhost:3000/AddToCart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ SessionID : getCookie("cookieID") , ProductID : ProductID }),
    });

        
    if(req.ok){
     let res = await req.json();
     if(res){
      setAddedToCart(true)
     }


     } else {
         
        console.error(`ERROR:${req.status},${req.statusText}`);
        alert(`ERROR:${req.status},${req.statusText}`);
    
     }


  }
  

  useEffect(() => {
    getProductimage()
  }, [])
  


  async function getProductimage(){
    
    let req = await fetch("http://localhost:3000/ProductsImage", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ID : props.ID }),
    });

    
    if(req.ok){
  
      let res = await req.json();

  
      document.querySelector(`#${props.ID}`).src=res.url

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
   
    <div  className={ProductStyle.product}>

      <div className={ProductStyle.productdetails}>

        {/* <div className={ProductStyle.id}>{props.ID}</div> */}
      
      <img src="default.png" id={props.ID} className={ProductStyle.productIMG} alt=''/>

      </div>

      <div className={ProductStyle.productname}>{props.Name}</div>

      <div className={ProductStyle.productprice}>{props.Price}/{props.unit}</div>

      <div className={ProductStyle.addcart} onClick={()=>{addcart(props.ID)}}>{AddedToCart? <img className={ProductStyle.done} src="DONE.png"/> : <p>Add to cart</p> }</div>

      

    </div>
  );
}



