import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

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
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newList = restaurantList?.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(newList);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const newList = restaurantList?.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setFilteredRestaurants(newList);
        }}
      >
        Top Rated Restaurants
      </button>
      {restaurantList?.length > 0 ? (
        <div className="res-container">
          {/* <RestaurantCard restaurant={{name:'Healthy Bites'}}/> */}
          {filteredRestaurants?.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
