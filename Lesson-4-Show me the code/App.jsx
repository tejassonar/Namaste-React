import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import salad from "./assets/salad.jpg";
import restaurantList from "./restaurants.json";
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo_image" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    restaurant?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId})`,
        backgroundSize: "cover",
      }}
    >
      {/* <img src={salad} alt="restaurant-image" className="res-image" /> */}
      <div className=" res-details res-details-bg"></div>
      <div className="res-details">
        <h4 className="text-white mt-4" style={{ zIndex: 100 }}>
          {name}
        </h4>
        <h5 className="text-white m-4">{cuisines.join(", ")}</h5>
        <h5 className="text-white m-4">{avgRating} stars</h5>
        <h5 className="text-white m-4">{sla?.slaString}</h5>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">SearchBar</div>
      <div className="res-container">
        {/* <RestaurantCard restaurant={{name:'Healthy Bites'}}/> */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
