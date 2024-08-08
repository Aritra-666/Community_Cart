import React from 'react'
import './Navbar.modules.css'
import { Link,BrowserRouter } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <BrowserRouter>
      <div className='name' >Community Cart</div >
      <div className="search-box">
      <input className='search' type="" placeholder='Seach for product, Brands, and more'/>
      <button className="search-btn">Search</button> 
      </div>
      <div className="attach-right">
      <div className="cart">
       <img className="cart-icon" src="cart-removebg-preview.png" alt="" />
    </div>
    <div className="account-box">
        <Link to="/Login"><img src="accountLogo.jpg" alt="" className="account-logo" /></Link>
    </div>
    </div>
    </BrowserRouter>
    </div>
  )
}
