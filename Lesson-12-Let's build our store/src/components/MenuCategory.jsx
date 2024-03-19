import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import FoodItem from "./FoodItem";

const MenuCategory = ({
  categoryData,
  setCategoryIndex,
  categoryIndex,
  index,
}) => {
  const showMenuItems = categoryIndex === index;
  //   const [showMenuItems, setShowMenuItems] = useState(false);
  return (
    <div>
      <div
        className="w-full flex justify-between p-4 my-2 shadow-lg cursor-pointer items-center"
        onClick={() => {
          setCategoryIndex(showMenuItems ? null : index);
        }}
      >
        <div className="font-semibold text-slate-700 text-lg">
          {categoryData?.title} ({categoryData.itemCards.length})
        </div>
        <div>{showMenuItems ? "⬆️" : "⬇️"}</div>
      </div>
      {showMenuItems ? (
        <div
          className={`border-[1px] border-t-0 shadow-lg transition-all ${
            showMenuItems ? " duration-300 ease-in-out" : ""
          }`}
        >
          {categoryData.itemCards.map((item) => {
            return (
              <FoodItem
                itemInfo={item?.card?.info}
                key={item?.card?.info?.id}
              />
            );
          })}
        </div>
      ) : (
        []
      )}
    </div>
  );
};

export default MenuCategory;
