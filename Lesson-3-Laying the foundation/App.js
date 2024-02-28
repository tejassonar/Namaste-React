import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element - JS Object => HTML Element render
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!!");

// JSX transpiled before it reaches to JS - Parcel - Babel
// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTML Element render
const jsxHeading = <h1 id="heading">Hello World from JSX!!</h1>;

const Title = () => {
  return <h1>Hello World!!!!</h1>;
};

const Container = () => {
  return (
    <div className="container">
      <Title />
      <h1>This is India!!</h1>
      <h1>This is Maharashtra!!</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<Container />);
