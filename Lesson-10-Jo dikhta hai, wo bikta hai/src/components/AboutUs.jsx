import React, { useLayoutEffect, useEffect, useRef } from "react";
import AboutClass from "./AboutClass";

class AboutUs extends React.Component {
  // const headRef = useRef(null);
  // useLayoutEffect(() => {
  //   debugger;
  //   headRef.current.style.top = "300px";
  // }, []);
  render() {
    return (
      <div className="flex flex-col">
        {/* <h1 style={{ position: "absolute" }} ref={headRef}>
        AboutUs
      </h1> */}
        <h1 className="text-xl font-semibold my-10 self-center">About Us</h1>
        <AboutClass />
      </div>
    );
  }
}

export default AboutUs;
