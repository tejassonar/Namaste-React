import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
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
        <button
          onClick={() =>
            btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
          }
          className="login"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
