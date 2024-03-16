import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL, CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const params = useParams();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const resInfo = useRestaurantMenu(params.resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, sla, cloudinaryImageId } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const menuCategories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col w-[70%] mt-5 ">
      <div className="flex shadow-lg rounded-2xl m-4">
        <img
          src={`${CDN_URL}/${cloudinaryImageId}`}
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />

        <div className="pl-6">
          <h1 className="font-bold text-slate-700 text-2xl pt-2">{name}</h1>
          <p className="text-md text-slate-500 mt-1">{cuisines.join(", ")}</p>
          <p className="text-md text-slate-500 mt-1">
            {sla.slaString} - {costForTwoMessage}
          </p>
        </div>
      </div>

      <div className="m-5">
        <h3 className="font-bold text-2xl text-slate-700 pl-2">Menu</h3>
        <div className="flex flex-col">
          {menuCategories.map((category, index) => {
            return (
              <MenuCategory
                key={category?.card?.card?.title}
                categoryData={category?.card?.card}
                setCategoryIndex={setCategoryIndex}
                categoryIndex={categoryIndex}
                index={index}
                // showMenuItems={categoryIndex === index ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
