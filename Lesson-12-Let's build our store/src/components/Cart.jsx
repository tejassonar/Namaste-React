import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="pt-6">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      {cartItems.length > 0 ? (
        <div className="shadow-lg lg:w-1/2 w-[90%] mx-auto pt-4">
          {cartItems.map((item) => {
            return <FoodItem itemInfo={item} />;
          })}
        </div>
      ) : (
        <div className="text-center pt-6">
          <h4 className="font-bold text-xl">Oops, Your cart is empty. </h4>
          <h5 className="font-medium text-base pt-2">
            Please add food to your cart.
          </h5>
        </div>
      )}
    </div>
  );
};

export default Cart;
