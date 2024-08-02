import React from "react";
import "./Footer.modules.css";

export default function Footer() {
  return (
    <div className="footer">
     
      <div className="brandcontext">We are authorised dealer of</div>
      <div className="brands">
        <img src="Brands/ADIDAS.jpeg" alt=""  className="brand-logo" />
        <img src="Brands/APPLE.jpeg" alt=""  className="brand-logo" />
        <img src="Brands/LEVI'S.png" alt=""  className="brand-logo" />
        <img src="Brands/NIKE.png" alt=""  className="brand-logo" />
      </div>

      <hr/>
  <div className="links">
      <div className="footer-section">
    <h4>Company Information</h4>
    <ul>
      <li><a href="/about-us">About Us</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
      <li><a href="/careers">Careers</a></li>
      <li><a href="/press-media">Press & Media</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </div>

  <div className="footer-section">
    <h4>Customer Service</h4>
    <ul>
      <li><a href="/help-center">Help Center</a></li>
      <li><a href="/shipping-delivery">Shipping & Delivery</a></li>
      <li><a href="/returns-exchanges">Returns & Exchanges</a></li>
      <li><a href="/faqs">FAQs</a></li>
      <li><a href="/size-guide">Size Guide</a></li>
    </ul>
  </div>

  <div className="footer-section">
    <h4>Legal</h4>
    <ul>
      <li><a href="/terms-of-service">Terms of Service</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/cookie-policy">Cookie Policy</a></li>
      <li><a href="/accessibility-statement">Accessibility Statement</a></li>
   
    </ul>
  </div>

  <div className="footer-section">
    <h4>Follow Us</h4>
    <ul className="social-media">
      <li><a href="https://www.facebook.com/yourcompany" target="_blank">Facebook</a></li>
      <li><a href="https://www.twitter.com/yourcompany" target="_blank">Twitter</a></li>
      <li><a href="https://www.instagram.com/yourcompany" target="_blank">Instagram</a></li>
      <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank">LinkedIn</a></li>
      <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank">Telegram</a></li>
    </ul>
  </div>



</div>


  <hr />
  <div className="footer-section-payment ">
    <h4 className="paymentcontext">Payment Methods</h4>
    <ul className="payment-methods">
      <li><img className="payment-img"  src="/Payment/VISA.jpeg" alt="Visa"/></li>
      <li><img className="payment-img"  src="/Payment/MASTERCARD.jpg" alt="MasterCard"/></li>
      <li><img className="payment-img"  src="/Payment/PAYPAL.jpg" alt="PayPal"/></li>
    </ul>
  </div>
 <hr />

 <div className="copyright">
        &copy; 2024 codeboldy. All rights reserved.
      </div>  
    </div>
  );
}
