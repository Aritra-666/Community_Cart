import React from "react";
import { useState,useEffect,useContext } from "react";
import Product from "./Product";
import ProductListStyle from "./ProductList.module.css";
import { Context } from "../context/context";


export default function ProductList() {
  
  const context = useContext(Context)


  const getProduct = async () => {


    let req = await fetch("http://localhost:3000/getProducts", {
      method: "POST",
    });

    if (req.ok) {
      let res = await req.json();

      if (res !== null) {
  
        context.setProducts(res);
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
      
        {context.Products ? 
        context.Products.map((product,index) => {
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
