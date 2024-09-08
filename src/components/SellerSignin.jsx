import React from "react";
import { useForm } from "react-hook-form";
import SellerSignStyle from "./SellerSign.module.css";

export default function SellerSignin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();


  const Submit = async (data) => {

    let req = await fetch("http://localhost:3000/verifySellerEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (req.ok) {
      let res = await req.json();



      if(res.ClientID == null || res.ClientID == undefined  ){
        alert("Sorry, but this email ID is already taken or not available")

      }else{
        
          document.querySelector("#submit").innerHTML=`Verification email sent`
          const polling = setInterval(() => {

            fetch("http://localhost:3000/sellertokenUpdates", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email: data.email, name: data.name, password: data.password, whatsapp: data.whatsapp, aadhaar: data.Aadhaar, PAN: data.PAN,bank: data.bank , ClientID: res.ClientID }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                if(data !== null){
                  if (data) {
                    clearInterval(polling);
                   document.querySelector("#submit").innerHTML="Verified"
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
  };

  return (
    <div className={SellerSignStyle.SignPage}>
      
      <div className={SellerSignStyle.SignContainer}>
        <div className={SellerSignStyle.header}>Seller sign up</div>
        <div id="alert" className={SellerSignStyle.alert}>
          {" "}
          !!! Enter correct details
        </div>
        {isSubmitting && <div>Loading...</div>}
        <form className={SellerSignStyle.form} onSubmit={handleSubmit(Submit)}>
          <div><input
            type="text"
            id="name"
            placeholder="Full Name"
            {...register("name", { required: {value:true, message:"This feild is requierd"} })}
          />
           {errors.name && <span>{errors.name.message}</span>}
         </div>
         <div>

          <input
            type="number"
            id="wp"
            placeholder="Whatsapp number"
            {...register("whatsapp", {
              required: {value:true, message:"This feild is requierd"},
              minLength: { value: 10, message: "invalid number" },
              maxLength: { value: 10, message: "invalid number" },
            })}
            />
          {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
            </div>
            <div>

          <input
            type="text"
            id="email"
            placeholder="email"
            {...register("email", { required: {value:true, message:"This feild is requierd"} })}
            />
          {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
            
          <input
            type="number"
            id="aadhaar"
            placeholder="Aadhaar number"
            {...register("Aadhaar",  {
              required: {value:true, message:"This feild is requierd"},
              minLength: { value: 12, message: "invalid Aadhaar ID" },
              maxLength: { value: 12, message: "invalid Aadhaar ID" },
            })}
            />
          {errors.Aadhaar && <span>{errors.Aadhaar.message}</span>}
            </div>
            <div>

          <input
            type="text"
            id="pan"
            placeholder="PAN ID"
            {...register("PAN", {
              required: {value:true, message:"This feild is requierd"},
              minLength: { value: 10, message: "invalid PAN ID" },
              maxLength: { value: 10, message: "invalid PAN ID" },
            })}
            />
          {errors.PAN && <span>{errors.PAN.message}</span>}
            </div>
            <div>

          <input
            type="number"
            id="Bank"
            placeholder="Bank Ac. number"
            {...register("bank", {
              required: {value:true, message:"This feild is requierd"},
              minLength: { value: 9, message: "invalid bank account" },
              maxLength: { value: 18, message: "invalid bank account" },
            })}
            />
          {errors.bank && <span>{errors.bank.message}</span>}
            </div>
            <div>

          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: {value:true, message:"This feild is requierd"} })}
            />
          {errors.password && <span>{errors.password.message}</span>}
            </div>
           <div>

          <input disabled={isSubmitting} className={SellerSignStyle.submit} type="submit" value="submit" id="submit" />
           </div>
        </form>
      </div>
    </div>
  );
}
