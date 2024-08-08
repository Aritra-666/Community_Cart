import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar";
import Catagory from "./components/Catagory";
import Advertising from "./components/Advertising";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const router = createBrowserRouter([

    {
      path:'/',
      element:<> </>
    },


    {
      path:'/Login',
      element: <Login/>
    },

  ]);

  return (
    
    <div className="app">
 
      <Navbar />
      
      <RouterProvider router={router}/>
      <Catagory />
      <div className="responsive">
        <Advertising />
        <ProductList Src={"mobile.webp"} />
        <Footer />
      </div>
    
    </div>
  );
}

export default App;
