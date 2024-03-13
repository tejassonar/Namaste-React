import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    restaurant?.info;
  return (
    <Link
      className="flex flex-col w-[320px] min-h-[360] rounded-lg p-4 shadow-lg m-3"
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

export default RestaurantCard;
