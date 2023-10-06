import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div name='shop' className="  max-w-[1800px] justify-between py-4 h-full md:h-[500px] mx-auto px-4 ">
    
      <div className="  md:shadow-none md:hover:shadow-md w-full md:w-[300px] py-4  gap-6 shadow-md shadow-slate-300  text-center sm:grid-cols-1  lg:grid-cols-3  ">
      <img  src={productImage} />
      <div className="mt-[-40px]">
        <p>
          <b >{productName}</b>
        </p>
        <p className="mt-2"> ${price}</p>
      </div>
      <button className=" hover:text-white mt-[10px] hover:bg-black rounded-md px-3 border py-2" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
    </div>
  );
};
