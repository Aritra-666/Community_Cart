import React from "react";
import { useState,useEffect } from "react";
import Product from "./Product";
import ProductListStyle from "./ProductList.module.css";
export default function ProductList() {
  const [Products, setProducts] = useState(null);



  const getProduct = async () => {


    let req = await fetch("http://localhost:3000/getProducts", {
      method: "POST",
    });

    if (req.ok) {
      let res = await req.json();

      if (res !== null) {
  
        setProducts(res);
      }
    } else {
      console.error(`ERROR:${req.status},${req.statusText}`);
      alert(`ERROR:${req.status},${req.statusText}`);
    }
  }

  useEffect(() => {getProduct()}, []) 

  return (
    <div className={ProductListStyle.productList}>
      <div  className={ProductListStyle.productcontainer}>
      
        {Products ? 
        Products.map((product,index) => {
          return (
            <Product key={index} ID={product.ProductID} Name={product.name} Price={product.price} unit={product.unit}/>
          );
        }
        ) 
        : 
        <p>Loading products...</p>
        }
      </div>
    </div>
  );
}
