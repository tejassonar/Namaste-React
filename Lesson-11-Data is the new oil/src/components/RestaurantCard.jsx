import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    restaurant?.info;
  return (
    <Link
      className="flex flex-col w-[320px] min-h-[360] rounded-lg p-4  hover:shadow-lg  m-3"
      to={"/restaurants/" + id}
    >
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="restaurant-image"
        className="w-[300px] h-[200px] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between h-[100%]">
        <h3 className="text-gray-600 font-bold mt-4">{name}</h3>
        <div className="flex flex-col items-start">
          <h5 className="text-gray-600 text-sm mt-1">{cuisines.join(", ")}</h5>
          <h5 className="text-gray-600 text-sm mt-1">{avgRating} stars</h5>
          <h5 className="text-gray-600 text-sm mt-1">{sla?.slaString}</h5>
        </div>
      </div>
    </Link>
  );
};

export const OfferRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative ">
        <label className="absolute bg-gradient-to-t from-[#f55733] to-[#fdb30f] left-[10px] top-3 rounded text-white text-sm py-1 px-2 before:absolute  before:border-l-[16px] before:border-t-[16px]  before:border-t-[#f55733] before:top-[30px] before:left-[2px] before:border-l-white">
          {props.restaurant.info.aggregatedDiscountInfoV3.header}{" "}
          <span className="text-[8px]">
            {props.restaurant.info.aggregatedDiscountInfoV3.subHeader}
          </span>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
