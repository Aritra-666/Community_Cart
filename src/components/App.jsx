import React from "react";
import { useState } from 'react'
import Navbar from "./Navbar";
import Catagory from "./Catagory";
import Advertising from "./Advertising";
import ProductList from "./ProductList";
import Footer from "./Footer";
import AppStyle from "./App.module.css";

function App() {


  const [Account,setAccount] = useState(false)

  window.onload = () => {

    let cookieID = getCookie('cookieID')

    if(cookieID !== null){
    
     sessionStorage.setItem('sessionID',cookieID)
     setAccount(true)
     
    }
  };
  

  function getCookie(name) {

    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let cookie of cookiesArray) {

      cookie = cookie.trim();

      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }

    return null;
  }

  return (
    
    <div className={AppStyle.app}>
    <div className={AppStyle.background}></div>
      <Navbar Account={Account} />
      <Catagory />
      <div className={AppStyle.responsive}>
        <Advertising />
        <ProductList Src={"Mobile.png"} />
        <Footer />
      </div>
    
    </div>
  );
}

export default App;
