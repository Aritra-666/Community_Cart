import React from 'react'
import NavbarStyle from './Navbar.module.css'
import { Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={NavbarStyle.navbar}>

      <div className={NavbarStyle.name} > <img src="logo.png" alt="" />Community Cart</div >
      <div className={NavbarStyle.searchbox}>
      <input className={NavbarStyle.search} type="" placeholder='Seach for product, Brands, and more'/>
      <button className={NavbarStyle.searchbtn}>Search</button> 
      </div>
      <div className={NavbarStyle.attachright}>
      <div className={NavbarStyle.cart}>
       <img className={NavbarStyle.carticon} src="cart-removebg-preview.png" alt="" />
    </div>
    <div className={NavbarStyle.accountbox}>
        <Link to="/Login"><img src="accountLogo.jpg" alt="" className={NavbarStyle.accountlogo} /></Link>
    </div>
    </div>
    
    </div>
  )
}
