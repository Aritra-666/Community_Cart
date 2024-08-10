import { useEffect } from "react";
import React, { useState } from "react";
import AdvertisingStyle from "./Advertising.module.css";

export default function Advertising() {
  const [View, setView] = useState(1);

  useEffect(() => {
    let nthChild = document.querySelector(`.${AdvertisingStyle.AdvertisingIMG}:nth-child(${View})`);
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
    <div className={AdvertisingStyle.AdvertisingRow}>

      <div className={AdvertisingStyle.swipeleft} onClick={swipeLeft}>&lt;</div>

      <div className={AdvertisingStyle.advertising}>

        <img className={AdvertisingStyle.AdvertisingIMG} src="Advertisments/ad1.png" alt="" />
        <img className={AdvertisingStyle.AdvertisingIMG} src="Advertisments/ad2.jpg" alt="" />
        <img className={AdvertisingStyle.AdvertisingIMG} src="Advertisments/ad3.png" alt="" />
        <img className={AdvertisingStyle.AdvertisingIMG} src="Advertisments/ad4.jpg" alt="" />
      
      </div>

      <div className={AdvertisingStyle.swiperight} onClick={swipeRight}>&gt;</div>
      
    </div>
  );
}
