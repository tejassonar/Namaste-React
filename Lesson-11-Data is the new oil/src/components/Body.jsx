import { useState, useEffect } from "react";
import RestaurantCard, { OfferRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import useDebounce from "../utils/Hooks/useDebounce";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchQuery = useDebounce(searchText);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    const newList = restaurantList?.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(newList);
  }, [searchQuery]);

  const RestaurantCardWithOffer = OfferRestaurantCard(RestaurantCard);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      setRestaurantList(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(err, "==Error==");
    }
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div>
        <h1>Ooops!! It seems you are Offline.</h1>
        <h3> Please check your Internet connection!</h3>
      </div>
    );
  }
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }
  return (
    <div className="flex flex-col">
      <div className="flex items-center my-8 justify-center">
        <div className="">
          <input
            type="text"
            className="border-slate-300 text-slate-500 border-[1px] text-xl rounded-2xl w-[500px] placeholder:text-slate-300 placeholder:font-light bg-slate-50 focus:outline-[#eeb8ac] focus:outline-[1px] focus:bg-white pl-4 py-1"
            value={searchText}
            placeholder="Search Restaurants"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            const newList = restaurantList?.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(newList);
          }}
          className="px-4 py-2 mx-8  self-start rounded-md text-white font-semibold bg-[#f55733] shadow-md"
        >
          Top Rated Restaurants
        </button>
        {/* <button onClick={() => {}}>Search</button> */}
      </div>

      {restaurantList?.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {/* <RestaurantCard restaurant={{name:'Healthy Bites'}}/> */}
          {filteredRestaurants?.map((restaurant) =>
            restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardWithOffer
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            ) : (
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            )
          )}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
