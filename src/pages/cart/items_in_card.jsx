import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem md:hover:shadow-md md:shadow-none shadow-md shadow-slate-600 md:hover:shadow-slate-800 w-[450px] md:w-[600px] h-[300px] mt-10 rounded-md  flex items-center ">
      <img className="w-[200px]" src={productImage} />
      <div className="description text-4xl ">
        <p>
          <b className=" text-2xl">{productName}</b>
        </p>
        <p className="text-2xl "> Price: ${price}</p>
        <div className="countHandler text-center ">
          <button onClick={() => removeFromCart(id)}> - </button>

          <input className="text-center w-[40px]"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />

          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
