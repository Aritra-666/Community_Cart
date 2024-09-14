import React from "react";
import { useState,useContext } from "react";
import NavbarStyle from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

export default function Navbar() {
  const [Account, setAccount] = useState(false);

  const context = useContext(Context)

   const getSearchResult = async (content) =>{

    console.log("getting...")
    context.setProducts(0);

    let req =  await fetch("http://localhost:3000/getSearchResult", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({content:content}),
    });

    if(req.ok){
      console.log("ok")
      let res = await req.json();

      if (res !== null) {
        console.log(res)
        context.setProducts(res); 
      }

    } else {
        console.error(`ERROR:${req.status},${req.statusText}`);
        alert(`ERROR:${req.status},${req.statusText}`);
      }



   }



  const checkSession = async (cookieID) => {
    if (cookieID !== null) {
      let req = await fetch("http://localhost:3000/CookieCheck", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ cookieID: cookieID }),
      });

      if (req.ok) {

         let res = await req.json();

         if(res){
          setAccount(true)
         }else{
          document.cookie = 'cookieID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
         }

      } else {
        console.error(`ERROR:${req.status},${req.statusText}`);
        alert(`ERROR:${req.status},${req.statusText}`);
      }
    }
  };

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
    <div
      onLoad={() => {
        checkSession(getCookie("cookieID"));
      }}
      className={NavbarStyle.navbar}
    >
      <div className={NavbarStyle.name}>
        {" "}
        <img src="logo.png" alt="" />
        Community Cart
      </div>
      <div className={NavbarStyle.searchbox}>
        <input
          className={NavbarStyle.search}
          type="text"
          id="search"
          placeholder="Seach for fruits,vegetables and more"
        />
        <button onClick={()=>
        {
          
          if(document.getElementById("search").value !== ''){
            getSearchResult(document.getElementById("search").value)
          }
        
        }
          
          } className={NavbarStyle.searchbtn}>Search</button>
      </div>
      <div className={NavbarStyle.attachright}>
        <div className={NavbarStyle.cart}>
        <Link to="/Cart">
          <img
            className={NavbarStyle.carticon}
            src="cart-removebg-preview.png"
            alt=""
          />
          </Link>
        </div>
        <div className={NavbarStyle.accountbox}>
          {Account ? (
            <Link to="/Account">
            <img
              src="accountLogo.jpg"
              alt=""
              className={NavbarStyle.accountlogo}
            />
            </Link>
          ) : (
            <Link to="/Login">
              <p className={NavbarStyle.login}>Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
