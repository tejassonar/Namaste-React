import { useState, useEffect } from "react";
import { MENU_API_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const fetchRestaurantInfo = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const resInfo = await data.json();
    setResInfo(resInfo);
  };
  return resInfo;
};

export default useRestaurantMenu;
