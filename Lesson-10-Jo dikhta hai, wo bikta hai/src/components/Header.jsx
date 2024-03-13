import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between px-8 shadow-lg">
      <img src={logo} alt="logo_image" className="w-24" />
      <div className="flex items-center">
        <p>Online Status: {isOnline ? "🟢" : "🔴"}</p>
        <ul className="flex ml-8 mr-32">
          <li className="px-5">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 mx-2">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 mx-2">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4 mx-2">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 mx-2">
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <button
          onClick={() =>
            btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
          }
          className="absolute right-12 px-4 py-2 mx-4 border-[1px]"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
