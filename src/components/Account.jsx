import React from "react";
import { useState } from "react";
import AccountStyle from "./Account.module.css";

export default function Account() {
 
  const [UID,setUID]=useState("####")
  const [Name,setName]=useState("####")
  const [Email,setEmail]=useState("####")
  
   async function GetAccount() {

    let req =  await fetch("http://localhost:3000/Account", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({cookieID : getCookie("cookieID")}),
    });

    if(req.ok){

      let res = await req.json();

      if(res !== false){
      
        setUID(res.uid)
        setName(res.name)
        setEmail(res.email)
      }else{
        alert("Sorry, you may have to login again")
        window.location.href="/Login"
      }



    }else{
      console.error(`ERROR:${req.status},${req.statusText}`);
      alert(`ERROR:${req.status},${req.statusText}`);
    }


  }


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
    <div className={AccountStyle.AccountMain}>
      <div onLoad={() => {GetAccount()}} className={AccountStyle.navbar}>
        <img  className={AccountStyle.ProfieImage} src="accountLogo.jpg" alt="" />

        <div className={AccountStyle.personal}>
        <div className={AccountStyle.uid}>UID:{UID}</div>
        <div className={AccountStyle.name}>{Name}</div>
        <div className={AccountStyle.email}>{Email}</div>
        </div>

      </div>
      <div className={AccountStyle.Data}>
        <div className={AccountStyle.orders}>Orders</div>
        <div className={AccountStyle.points}>Points:</div>
      </div>
    </div>
  );
}
