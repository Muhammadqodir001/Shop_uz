import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";


export const Shop = () => {
  return (
    <div  className="main_db  bg-white ">
   
      <div className="grid   md:grid-cols-3 items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
