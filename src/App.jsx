import React from "react";
import Navbar from "./components/Navbar";
import Catagory from "./components/Catagory";
import Advertising from "./components/Advertising";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Catagory />
      <div className="responsive">
      <Advertising />
      <ProductList />
      </div>
    </div>
  );
}

export default App;
