import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";


export const Shop = () => {
  return (
    <div >
      <div className=" text-center text-6xl mt-[100px]">
        <h1 className=" text-amber-500 ">Uz Internet Shop</h1>
      </div>

      <div className="grid md:grid-cols-3 items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
