import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo_image" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
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
