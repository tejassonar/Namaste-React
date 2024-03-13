import React, { useState } from "react";
import profilePhoto from "../assets/tejas.jpg";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      </div>
    );
  }
}
export default ContactUs;
