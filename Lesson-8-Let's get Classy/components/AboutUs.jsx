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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <h1 style={{ position: "absolute" }} ref={headRef}>
        AboutUs
      </h1> */}
        <h1>AboutUs</h1>
        <AboutClass />
      </div>
    );
  }
}

export default AboutUs;
