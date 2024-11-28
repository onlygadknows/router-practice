"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { serverSideFunction } from "../utils/server-utils";

export default function ClientRoute() {
    console.log("Client route rendered");
    

  const result = serverSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img className='object-cover h-48 w-96' src="https://picsum.photos/123/300" />
        </div>
        <div>
          <img className='object-cover h-48 w-96' src="https://picsum.photos/112/300" />
        </div>
        <div>
          <img className='object-cover h-48 w-96' src="https://picsum.photos/432/300" />
        </div>
        <div>
          <img className='object-cover h-48 w-96' src="https://picsum.photos/756/300" />
        </div>
      </Slider>
    </div>
  );
}
