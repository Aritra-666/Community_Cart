import React from "react";
import { Link } from "react-router-dom";
import SignStyle from "./Sign.module.css";

export default function Sign() {
  const sendForVerify = async (email, name, password) => {
    console.log(email);

    let req = await fetch("http://localhost:3000/verifyEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ Email: email, Name: name, Password: password }),
    });

    if (req.ok) {
      let res = await req.json();

      if (res.ClientID !== null) {
        document.querySelectorAll(`.${SignStyle.input}`).forEach((element) => {
          element.disabled = true;
        })
          document.querySelector(`.${SignStyle.verify}`).innerHTML="Verification link sent on your email"
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
                   alert("Your Email is verified and your account is successfully created")
                   window.location.href='/'
                  }else if(!data){
                    alert("not verified")
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
