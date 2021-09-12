import React, { useState } from "react";
import ImgComp from "../ImageComponent/ImgComp";
import "./ImageSlider.scss";
import i1 from "../../assets/1.jpg";
import i2 from "../../assets/2.jpg";
import i3 from "../../assets/3.jpg";
import i4 from "../../assets/4.jpg";
import i5 from "../../assets/5.jpg";

export default function ImageSlider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];
  const [x, setX] = useState(0);
  const leftBtn = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const rightBtn = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div>
      <div className="wrapper">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="leftBtn" onClick={leftBtn}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button id="rightBtn" onClick={rightBtn}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
