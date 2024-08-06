import React from 'react'
import './Navbar.modules.css'
export default function Navbar() {
  return (
    <div className='navbar'>
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
      <img src="accountLogo.jpg" alt="" className="account-logo" />
    </div>
    </div>
    </div>
  )
}
