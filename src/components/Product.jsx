import React,{useState,useEffect} from "react";
import ProductStyle from "./Product.module.css";

export default function Product(props) {



  const[AddedToCart,setAddedToCart]=useState(false)

  const addcart=() => {
    setAddedToCart(true)
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

      console.log(res)
  
      document.querySelector(`#${props.ID}`).src=res.url

     } else {
         
        console.error(`ERROR:${req.status},${req.statusText}`);
        alert(`ERROR:${req.status},${req.statusText}`);
    
     }
    
  }
    
    return (
   
    <div  className={ProductStyle.product}>

      <div className={ProductStyle.productdetails}>

        {/* <div className={ProductStyle.id}>{props.ID}</div> */}
      
      <img src="default.png" id={props.ID} className={ProductStyle.productIMG} alt=''/>

      </div>

      <div className={ProductStyle.productname}>{props.Name}</div>

      <div className={ProductStyle.productprice}>{props.Price}/{props.unit}</div>

      <div className={ProductStyle.addcart} onClick={addcart}>{AddedToCart? <img className={ProductStyle.done} src="DONE.png"/> : <p>Add to cart</p> }</div>

      

    </div>
  );
}



