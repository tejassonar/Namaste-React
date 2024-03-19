import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/reducers/cartReducer";
import { store } from "../utils/store/store";

const FoodItem = ({ itemInfo }) => {
  const dispatch = useDispatch();
  const addItemClick = (itemInfo) => {
    dispatch(addItem(itemInfo));
  };
  const removeItemClick = (itemInfo) => {
    dispatch(removeItem(itemInfo));
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="relative p-2 pl-4 py-6 flex border-b-[1px] border-slate-200 transition-all duration-500 ease-in-out">
      <img
        src={CDN_URL + "/" + itemInfo?.imageId}
        alt="item_image"
        className="w-24 h-24 rounded-lg object-cover mr-8 border-[0.5px] border-slate-200"
      />
      {cartItems.find((cartItem) => cartItem.id === itemInfo.id) ? (
        <div
          className="absolute top-[100px] cursor-pointer left-7 bg-white w-[72] text-center py-1 text-red-500 text-sm font-normal shadow-lg rounded-md"
          onClick={() => removeItemClick(itemInfo)}
        >
          Remove
        </div>
      ) : (
        <div
          className="absolute top-[100px] cursor-pointer left-7 bg-white w-[72] text-center py-1 text-sm text-green-500 font-normal shadow-lg rounded-md"
          onClick={() => addItemClick(itemInfo)}
        >
          Add
        </div>
      )}
      <div>
        <div className="font-semibold text-slate-700">{itemInfo?.name}</div>
        <div className="font-normal text-sm">
          {" "}
          ₹ {(itemInfo?.price ?? itemInfo?.defaultPrice) / 100}
        </div>
        <div className="font-normal text-sm text-slate-500">
          {itemInfo?.description}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
