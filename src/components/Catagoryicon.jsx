import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/context'
import CatagoryiconStyle from'./Catagoryicon.module.css'
export default function Catagoryicon(props) {


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


  return (
    <div onClick={()=>{getSearchResult(props.name)}} className={CatagoryiconStyle.catagoryicon}>
      
      <img className={CatagoryiconStyle.catagoryiconIMG} src={props.IMGsrc} alt='' />

      <div className={CatagoryiconStyle.catagoryiconName}>{props.name}</div>

    </div>
  )
}
