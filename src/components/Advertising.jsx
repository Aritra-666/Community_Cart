import { useEffect } from "react";
import React, { useState } from "react";
import "./Advertising.modules.css";

export default function Advertising() {
  const [View, setView] = useState(1);

  useEffect(() => {
    let nthChild = document.querySelector(`.advertising :nth-child(${View})`);
    console.log(nthChild);
    nthChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [View]);

  const swipeRight = () => {
    if (View + 1 <= 4) {
      setView(View + 1);
    } else {
      setView(1);
    }
  };

  const swipeLeft = () => {
    if (View - 1 >= 1) {
      setView(View - 1);
    } else {
      setView(4);
    }
  };

  return (
    <div className="Advertising-Row">

      <div className="swipe-left" onClick={swipeLeft}>&lt;</div>

      <div className="advertising">

        <img className="AdvertisingIMG" src="Advertisments/ad1.png" alt="" />
        <img className="AdvertisingIMG" src="Advertisments/ad2.jpg" alt="" />
        <img className="AdvertisingIMG" src="Advertisments/ad3.png" alt="" />
        <img className="AdvertisingIMG" src="Advertisments/ad4.jpg" alt="" />
      
      </div>

      <div className="swipe-right" onClick={swipeRight}>&gt;</div>
      
    </div>
  );
}
