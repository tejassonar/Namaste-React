import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL, CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const params = useParams();

  // useEffect(() => {
  //   fetchResData();
  // }, []);

  // const fetchResData = async () => {
  //   const response = await fetch(MENU_API_URL + params.resId);
  //   const data = await response.json();
  //   setResInfo(data);
  // };
  const resInfo = useRestaurantMenu(params.resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, sla, cloudinaryImageId } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div
      style={{
        width: "70%",
        marginTop: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={`${CDN_URL}/${cloudinaryImageId}`}
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "16px",
            margin: "20px",
          }}
        />
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>
            {sla.slaString} - {costForTwoMessage}
          </p>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <h3>Menu</h3>
        <ul style={{ padding: 0 }}>
          {itemCards &&
            itemCards.map((item) => {
              return (
                <li
                  key={item?.card?.info?.id}
                  style={{ listStyle: "none", display: "flex", margin: "8px" }}
                >
                  <img
                    src={`${CDN_URL}/${item?.card?.info?.imageId}`}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "16px",
                      marginRight: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginTop: "4px",
                    }}
                  >
                    <div>{item?.card?.info?.name}</div>
                    <div>
                      Rs.{" "}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
