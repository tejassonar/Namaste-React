import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    restaurant?.info;
  return (
    <Link
      className="res-card"
      style={{
        backgroundImage: `url(${CDN_URL}/${cloudinaryImageId})`,
        backgroundSize: "cover",
      }}
      to={"/restaurants/" + id}
    >
      {/* <img src={salad} alt="restaurant-image" className="res-image" /> */}
      <div className="res-details res-details-bg"></div>
      <div className="res-details">
        <h3 className="text-white mt-4" style={{ zIndex: 100 }}>
          {name}
        </h3>
        <h5 className="text-white m-4">{cuisines.join(", ")}</h5>
        <h5 className="text-white m-4">{avgRating} stars</h5>
        <h5 className="text-white m-4">{sla?.slaString}</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;
