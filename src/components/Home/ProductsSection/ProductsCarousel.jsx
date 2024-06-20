import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductsCard from "./ProductsCard";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { arrowIconStyle, buttonStyle } from "./ProductsCarouselStyle";
import ButtonComponent from "./ButtonComponent";


const ProductsCarousel = ({data,section}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data.map((product) => (
    <ProductsCard product={product} />
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-500 py-5">{section}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length - 5 && (
          <ButtonComponent
            click={slideNext}
            style={{ right: 0, transform: "translateX(50%) rotate(90deg)" }}
          >
            {" "}
            <KeyboardArrowLeft sx={arrowIconStyle} />
          </ButtonComponent>
        )}
        {activeIndex !== 0 && (
          <ButtonComponent
            click={slidePrev}
            style={{ left: 0, transform: "translateX(-50%) rotate(90deg)" }}
          >
            {" "}
            <KeyboardArrowRight sx={arrowIconStyle} />
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};

export default ProductsCarousel;
