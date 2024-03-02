import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    restaurant?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundImage: `url(${CDN_URL}/${cloudinaryImageId})`,
        backgroundSize: "cover",
      }}
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
    </div>
  );
};

export default RestaurantCard;
