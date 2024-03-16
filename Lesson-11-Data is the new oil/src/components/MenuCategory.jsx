import { useState } from "react";
import { CDN_URL } from "../utils/constants";

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
      <div className="border-[1px] border-t-0 shadow-lg">
        {showMenuItems
          ? categoryData.itemCards.map((item) => {
              return (
                <div className="relative p-2 pl-4 py-6 flex border-b-[1px] border-slate-200">
                  <img
                    src={CDN_URL + "/" + item?.card?.info?.imageId}
                    alt="item_image"
                    className="w-24 h-24 rounded-lg object-cover mr-8 border-[0.5px] border-slate-200"
                  />
                  <div className="absolute top-[100px] cursor-pointer left-8 bg-white px-4 py-1 text-green-500 font-normal shadow-lg rounded-md">
                    Add
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">
                      {item?.card?.info?.name}
                    </div>
                    <div className="font-normal text-sm">
                      {" "}
                      ₹{" "}
                      {(item?.card?.info?.price ??
                        item?.card?.info?.defaultPrice) / 100}
                    </div>
                    <div className="font-normal text-sm text-slate-500">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                </div>
              );
            })
          : []}
      </div>
    </div>
  );
};

export default MenuCategory;
