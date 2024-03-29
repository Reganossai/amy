import React, { useState, useEffect,useCallback } from 'react';
import {Link} from "react-router-dom";
import all1 from "../assets/image0.jpeg";
import all2 from "../assets/image1.jpeg";
import all3 from "../assets/image2.jpeg";
import all4 from "../assets/image3.jpeg";
import all5 from "../assets/image4.jpeg";
import all6 from "../assets/image5.jpeg";
import all7 from "../assets/image6.jpeg";
import all9 from "../assets/image7.jpeg";


const images = [all1,all2,all3,all4,all5,all6,all7,all9]; 

const imagess = [all1,all2,all3,all4,all5,all6,all7,all9]
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfSlides = 2;
  const intervalDuration = 4000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
  }, [numberOfSlides]);

  useEffect(() => {
    const abortController = new AbortController();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    const intervall = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagess.length);
    }, intervalDuration);

    const carouselInterval = setInterval(nextSlide, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(intervall);
      clearInterval(carouselInterval);
      abortController.abort();
    };
  }, [nextSlide]);

  // Render your carousel component with images

  return (
      <div id="carouselExampleIndicators" className="carousel slide">
        <h1 className='titlee'>Happy Valentine's day</h1>
  <div className="carousel-inner">
    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
      <img src={images[currentImageIndex]} id="carousel" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <button id="shop-now" className="btn btn-outline-dark">You are altogether beautiful, my darling; there's no flaw in you (Sol. 4:7)</button>
      </div>
    </div>
    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
      <img src={imagess[currentImageIndex]} id="carousel" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <button id="shop-now" className="btn btn-outline-dark">Your beauty knows no bounds</button>
      </div>
    </div>
    
  </div>
  <div className="carousel-control-prev">
    <span className="visually-hidden">Peace</span>
  </div>
  <div className="carousel-control-next" >
    <span className="visually-hidden">Love</span>
  </div>
</div>
  )
}

export default Carousel