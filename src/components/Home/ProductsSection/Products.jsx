import React from "react";
import ProductsCarousel from './ProductsCarousel'
import { productsData } from "../../../utils/ProductsData";

const Products = () => {
    
    
  return (
    <div className="py-20 space-y-10 px-5 lg:px-10">
      <ProductsCarousel data={productsData} section={"Electronics Gadgets"} />
      <ProductsCarousel data={productsData} section={"Clothing"} />
      <ProductsCarousel data={productsData} section={"Groceries"} />
      <ProductsCarousel data={productsData} section={"Groceries"} />
    </div>
  );
};

export default Products;
