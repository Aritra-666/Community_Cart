import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import AddStyle from './AddProduct.module.css'



export default function AddProduct() {

 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors , isSubmitting },
      } = useForm();


     const [Base64,setBase64]=useState(0)



      const Submit = async (data) => {



     const reader = new FileReader();

     reader.readAsDataURL(data.IMG[0])

     reader.onload =async function(){
      let url =reader.result
     
        setBase64(url)

       
        
        
        
        let req =  await fetch("http://localhost:3000/AddProducts", {
          method: "POST",
          headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              cookieID:getCookie("cookieID"),
              name:data.name,
              price:data.price,
              unit: data.unit,
              IMG:url
            }),
          });
          
          if(req.ok){
            
            let res = await req.json();
            
          } else {
            
            console.error(`ERROR:${req.status},${req.statusText}`);
            alert(`ERROR:${req.status},${req.statusText}`);
            
          }
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
    <div className={AddStyle.box}>

      <form className={AddStyle.form} onSubmit={handleSubmit(Submit)}>
        <input type="text" className={AddStyle.input}  placeholder='Product name'   {...register("name", { required: {value:true, message:"This feild is requierd"} })}/>
        {errors.name && <span>{errors.name.message}</span>}

        <input type="file" id="file" name="file" className={AddStyle.file} {...register("IMG", { required: {value:true, message:"This feild is requierd"} })}/>
        <label htmlFor="file" className={AddStyle.customfilelabel}>Choose a Product image</label>
        {errors.IMG && <span>{errors.IMG.message}</span>}
        <div className={AddStyle.pricing}>
        <input type="number" placeholder='Price' className={AddStyle.input}  {...register("price", {
              required: {value: true, message:"This feild is requierd"},
            
            })} />
  
        <select name="unit" id="unit" className={AddStyle.unit} {...register("unit",{ required:true})}  >
            <option value="Kg">/Kg</option>
            <option value="gm">/gm</option>
        </select>
        </div>
        {errors.price && <span>{errors.price.message}</span>}
        <input type="submit" className={AddStyle.submit} disabled={isSubmitting} value="Submit" />
      </form>

    </div>
  )
}
