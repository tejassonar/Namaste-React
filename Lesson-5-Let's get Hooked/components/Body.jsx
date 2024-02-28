import { useState } from "react";
import restaurantsMockData from "../utils/restaurants.json";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantsMockData);
  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <button
        onClick={() => {
          const newList = restaurantsMockData.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setRestaurantList(newList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {/* <RestaurantCard restaurant={{name:'Healthy Bites'}}/> */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
