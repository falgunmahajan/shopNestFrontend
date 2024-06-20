import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { heroCarouselData } from "../../utils/HeroCarouselData";

const HeroCarousel = () => {
  const items = heroCarouselData.map((item) => (
    <img role="presentation" src={item.image} alt="" className="cursor-pointer" />
  ));
  return(
  
 <AliceCarousel items={items} disableButtonsControls autoPlay autoPlayInterval={1000} infinite/>
    
 )
};
export default HeroCarousel;
