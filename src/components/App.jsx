import React from "react";
import Navbar from "./Navbar";
import Catagory from "./Catagory";
import Advertising from "./Advertising";
import ProductList from "./ProductList";
import Footer from "./Footer";
import AppStyle from "./App.module.css";

function App() {


 

  
  
  
  
  



  return (
    
    <div className={AppStyle.app}>
    <div className={AppStyle.background}></div>
      <Navbar />
      <Catagory />
      <div className={AppStyle.responsive}>
        <Advertising />
        <ProductList/>
        <Footer />
      </div>
    
    </div>
  );
}

export default App;
