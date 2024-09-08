import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "./Login.module.css";

export default function Login() {

  const [Remember,setRemember] = useState(false)
  const [Seller,setSeller] = useState(false)


  const LoginSubmit = async (object) => {

    console.log(object.Seller)
    
    document.querySelectorAll(`.${LoginStyle.input}`).forEach((element) => {
      element.disabled = true;
    })

    if(object.Seller){

      let req =  await fetch("http://localhost:3000/sellerLogin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(object),
      });
      
     if(req.ok){
  
      let res = await req.json();
  
      if(!res) {
        alert("Account not exists")
        document.querySelectorAll(`.${LoginStyle.input}`).forEach((element) => {
          element.disabled = false;
        })
      }else{
        
        if(object.Remember){
          setcookie(res.cookieID , 365)
          window.location.href='/'
        }else{
           document.cookie = `cookieID=${res.cookieID};`
           window.location.href='/'
        }
  
      } 
     } else {
         
        console.error(`ERROR:${req.status},${req.statusText}`);
        alert(`ERROR:${req.status},${req.statusText}`);
    
     }







    }else{





      let req =  await fetch("http://localhost:3000/Login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(object),
      });
      
     if(req.ok){
  
      let res = await req.json();
  
      if(!res) {
        alert("Account not exists")
        document.querySelectorAll(`.${LoginStyle.input}`).forEach((element) => {
          element.disabled = false;
        })
      }else{
        
        if(object.Remember){
          setcookie(res.cookieID , 365)
          window.location.href='/'
        }else{
           document.cookie = `cookieID=${res.cookieID};`
           window.location.href='/'
        }
  
      } 
     } else {
         
        console.error(`ERROR:${req.status},${req.statusText}`);
        alert(`ERROR:${req.status},${req.statusText}`);
    
     }








    }

  }
  

  const setcookie= async (ID , ExpireDays) => {
    

   const ExpireDate =  new Date( Date.now()+(3600000*24*ExpireDays)).toUTCString();
 
   document.cookie = `cookieID=${ID}; expires=${ExpireDate}; path=/`;

  }
  


  return (
    <div className={LoginStyle.loginpage}>
      
      <div className={LoginStyle.logincontainer}>
        <h2>Login</h2>
        <form action="#" method="post">
          <div className={LoginStyle.wrapinput}>
            <input
              className={LoginStyle.input}
              id="Email"
              type="text"
              placeholder="Email"
            />
            <span className={LoginStyle.focusborder}></span>
          </div>

          <div className={LoginStyle.wrapinput}>
            <input
              className={LoginStyle.input}
              id="Password"
              type="Password"
              placeholder="Password"
            />
            <span className={LoginStyle.focusborder}></span>
          </div>

          <div className={LoginStyle.checkbox}>
            <label  htmlFor="check">Remember me</label>
            <input onChange={() => {Remember? setRemember(false):setRemember(true)}} type="checkbox"  id="check"  />
          </div>

          <div className={LoginStyle.checkbox}>
            <label  htmlFor="sellercheck">Are you a selller?</label>
            <input onChange={() => {Seller? setSeller(false):setSeller(true)}} type="checkbox"  id="sellercheck"  />
            </div>.
        </form>
        <div
          onClick={() => {
            LoginSubmit(
              {
                 Email: document.querySelector("#Email").value,
                 Password: document.querySelector("#Password").value,
                 Remember: Remember,
                 Seller: Seller
             }
            );
          }}
          id={LoginStyle.submit}
        >
          <h3>log in</h3>
        </div>
        <Link to="/Signin">
          <p className={LoginStyle.create}> create new account </p>
        </Link>
      </div>
    </div>
  );
}
