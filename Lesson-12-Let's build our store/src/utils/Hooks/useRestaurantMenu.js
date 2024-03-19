import { useState, useEffect } from "react";
import { D_MENU_API_URL, M_MENU_API_URL } from "../constants";
import { getCorsProxyUrl } from "../functions/corsProxyUrl";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const fetchRestaurantInfo = async () => {
    let type = new MobileDetect(window.navigator.userAgent);

    const MenuUrl = getCorsProxyUrl(
      (type.phone() ? M_MENU_API_URL : D_MENU_API_URL) + resId
    );

    const data = await fetch(MenuUrl);
    const resInfo = await data.json();
    setResInfo(resInfo);
  };
  return resInfo;
};

export default useRestaurantMenu;
