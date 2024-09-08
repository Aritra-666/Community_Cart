import React from "react";
import { useState } from "react";
import NavbarStyle from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [Account, setAccount] = useState(false);

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
          type=""
          placeholder="Seach for fruits,vegetables and more"
        />
        <button className={NavbarStyle.searchbtn}>Search</button>
      </div>
      <div className={NavbarStyle.attachright}>
        <div className={NavbarStyle.cart}>
          <img
            className={NavbarStyle.carticon}
            src="cart-removebg-preview.png"
            alt=""
          />
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
