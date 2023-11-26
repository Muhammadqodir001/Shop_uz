import React, { useContext } from "react";
import { ShopContext } from "../../components/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./items_in_card";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart flex items-center py-10  flex-col justify-center">
      <div>
        <h1 className="font-bold text-3xl">Your buying products</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="mt-[10px]">
          <p className="ml-[15px]"> Subtotal: ${totalAmount} </p>
          < button className=" mt-[20px] w-[150px] h-[50px] border hover:text-white hover:bg-black rounded-lg" 
              onClick={() => navigate("/")}> Continue Shopping 
          </button>
      
        </div>
      ) : (
         <h1 className="mt-2 "> You have nothing in the card</h1>
       )}
    </div>
  );
};



