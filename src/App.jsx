import React from "react";
import Navbar from "./components/Navbar";
import Catagory from "./components/Catagory";
import Advertising from "./components/Advertising";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Catagory />
      <div className="responsive">
      <Advertising />
      <ProductList Src={"mobile.webp"} />
      <Footer/>
      </div>
    
    </div>
  );
}

export default App;
