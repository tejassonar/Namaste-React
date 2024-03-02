import React from "react";
import profilePhoto from "../assets/tejas.jpg";

const ContactUs = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Contact Us</h1>
      <div className="contact">
        <img
          src={profilePhoto}
          style={{ width: 150, height: 150, borderRadius: 10, marginRight: 30 }}
          alt="profile_pic.jpg"
        />
        <div>
          <h3>Name: {props.name}</h3>
          <h5>Location: {props.location}</h5>
          <h5>contact: {props.contact}</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
