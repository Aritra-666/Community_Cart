import React,{useState} from "react";
import Navbar from "./Navbar";
import Catagory from "./Catagory";
import Advertising from "./Advertising";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { Context } from "../context/context";
import AppStyle from "./App.module.css";

function App() {


 

  const [Products, setProducts] = useState(null);
  
  
  
  



  return (
    <Context.Provider   value={{Products,setProducts}}>

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


    </Context.Provider>
  );
}

export default App;
