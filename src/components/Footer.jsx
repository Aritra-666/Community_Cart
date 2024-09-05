
import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.brandcontext}>We are authorised dealer of</div>
      <div className={FooterStyle.brands}>
        <img src="Brands/ADIDAS.jpeg" alt="" className={FooterStyle["brand-logo"]} />
        <img src="Brands/APPLE.jpeg" alt="" className={FooterStyle["brand-logo"]} />
        <img src="Brands/LEVI'S.png" alt="" className={FooterStyle["brand-logo"]} />
        <img src="Brands/NIKE.png" alt="" className={FooterStyle["brand-logo"]} />
      </div>

      <hr />
      <div className={FooterStyle.links}>
        <div className={FooterStyle["footer-section"]}>
          <h4 className={FooterStyle.headers}>Company Information</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press-media">Press & Media</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className={FooterStyle["footer-section"]}>
          <h4 className={FooterStyle.headers}>Customer Service</h4>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/shipping-delivery">Shipping & Delivery</a></li>
            <li><a href="/returns-exchanges">Returns & Exchanges</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
          </ul>
        </div>

        <div className={FooterStyle["footer-section"]}>
          <h4 className={FooterStyle.headers}>Legal</h4>
          <ul>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/accessibility-statement">Accessibility Statement</a></li>
          </ul>
        </div>

        <div className={FooterStyle["footer-section"]}>
          <h4 className={FooterStyle.headers}>Follow Us</h4>
          <ul className={FooterStyle["social-media"]}>
            <li><a href="https://www.facebook.com/yourcompany" target="_blank">Facebook</a></li>
            <li><a href="https://www.twitter.com/yourcompany" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/yourcompany" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank">Telegram</a></li>
          </ul>
        </div>
      </div>

      <hr />
      <div className={`${FooterStyle["footer-section"]} ${FooterStyle["footer-section-payment"]}`}>
  
        <h5 className={FooterStyle.paymentcontext}>Payment Methods</h5>
        <ul className={FooterStyle["payment-methods"]}>
          <li><img className={FooterStyle["payment-img"]} src="/Payment/VISA.jpeg" alt="Visa"/></li>
          <li><img className={FooterStyle["payment-img"]} src="/Payment/MASTERCARD.jpg" alt="MasterCard"/></li>
          <li><img className={FooterStyle["payment-img"]} src="/Payment/PAYPAL.jpg" alt="PayPal"/></li>
        </ul>
      
      </div>
      <hr />

      <div className={FooterStyle.BecomeSeller}>  <Link to="/SellerSign">BecomeSeller</Link></div>
      <hr />
      <div className={FooterStyle.copyright}>
        &copy; 2024 codeboldy. All rights reserved.
      </div>
   
    </div>
  );
}

