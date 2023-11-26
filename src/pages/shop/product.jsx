import React, { useContext } from "react";
import { ShopContext } from "../../components/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, colors } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  
  return (
    <div name='shop' className="max-w-[1800px] py-4 h-[500px] mx-auto">

      <div className="space-y-2 w-[300px] bg-white h-[450px] shadow-md rounded-md shadow-gray-500 text-center sm:grid-cols-1 lg:grid-cols-3">
        <img  className =' rounded-md  'src={productImage} alt={productName} />
        <div className="mt-[-32px]">
          <p>
            <b>{productName}</b>
          </p>

          <p className="mt-2 text-[#ff944d]"> ${price}</p>
        </div>

        <button className="text-white mt-[10px] bg-[#ff944d] rounded-md px-2 border py-2" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};