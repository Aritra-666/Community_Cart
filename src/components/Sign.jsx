import React from "react";
import { Link } from "react-router-dom";
import SignStyle from "./Sign.module.css";

export default function Sign() {
  const sendForVerify = async (email, name, password) => {
    


    document.querySelectorAll(`.${SignStyle.input}`).forEach((element) => {
      element.disabled = true;
    })


    

    let req = await fetch("http://localhost:3000/verifyEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ Email: email, Name: name, Password: password }),
    });

    if (req.ok) {
      let res = await req.json();

      console.log(res.ClientID)


      if(res.ClientID == null || res.ClientID == undefined  ){
        alert("Sorry, but this email ID is already taken or not available")
        document.querySelector('#Email').value=''

        document.querySelectorAll(`.${SignStyle.input}`).forEach((element) => {
          element.disabled = false;
      })
      }else{
        
          document.querySelector(`.${SignStyle.verify}`).innerHTML=`Verification link sent on your email with ID ${res.ClientID}`
          const polling = setInterval(() => {

            fetch("http://localhost:3000/tokenUpdates", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({Email: email, Name: name, Password: password, ClientID: res.ClientID }),
            })
              .then((response) => response.json())
              .then((data) => {
                if(data !== null){
                  if (data) {
                    clearInterval(polling);
                   document.querySelector(`.${SignStyle.verify}`).innerHTML="Verified"
                   alert("Your account has been successfully created. Please log in using your credentials.")
                   window.location.href='/Login'
                  }else if(!data){
                    alert("not verified")
                    window.location.href='/'
                  }
                }
                });
          }, 5000);
      }
      } else {
        
          console.error(`ERROR:${req.status},${req.statusText}`);
          alert(`ERROR:${req.status},${req.statusText}`);
      
      }
    }
  



  return (
    <div className={SignStyle.Signpage}>
      <div className={SignStyle.Signcontainer}>
        <h2>Sign in</h2>
        <form action="#" method="post">
          <div className={SignStyle.wrapinput}>
            <input
              className={SignStyle.input}
              id="Email"
              type="text"
              placeholder="Your Email"
            />
            <span className={SignStyle.focusborder}></span>
          </div>

          <div className={SignStyle.wrapinput}>
            <input
              className={SignStyle.input}
              id="username"
              type="text"
              placeholder="Your name"
            />
            <span className={SignStyle.focusborder}></span>
          </div>

          <div className={SignStyle.wrapinput}>
            <input
              className={SignStyle.input}
              id="password"
              type="password"
              placeholder="Enter a password"
            />
            <span className={SignStyle.focusborder}></span>
          </div>
        </form>
        <div
          className={SignStyle.verify}
          onClick={() => {
            sendForVerify(
              document.querySelector("#Email").value,
              document.querySelector("#username").value,
              document.querySelector("#password").value
            );
          }}
        >
          Verify
        </div>
        <Link to="/Login">
          <p className={SignStyle.create}> Already have an account? </p>
        </Link>
      </div>
    </div>
  );
}
