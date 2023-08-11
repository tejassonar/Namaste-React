import React from "react";
import ReactDOM from "react-dom/client";
// Using Vanilla Javascript
// const heading = document.createElement('h1');
//       heading.innerHTML = 'Hellow World from Vanilla Javascript!!!';

//       const root = document.getElementById('root');
//       root.appendChild(heading)

// <div id="parent">
// <div id="child1">
//   <h1>I am a h1 tag.</h1>
//   <h2>I am a h2 tag.</h2>
// </div>
// <div id="child2">
//   <h1>I am a h1 tag.</h1>
//   <h2>I am a h2 tag.</h2>
// </div>
// </div>

const parent = React.createElement("div", { id: "parent", abc: "xyz" }, [
  React.createElement("div", { id: "child1", key: "1" }, [
    React.createElement("h1", { key: "1" }, "I am a h1 tag."),
    React.createElement("h2", { key: "2" }, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "2" }, [
    React.createElement("h1", { key: "1" }, "I am a h1 tag."),
    React.createElement("h2", { key: "2" }, "I am a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "xyz" },
//   "Hello World from React!!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
