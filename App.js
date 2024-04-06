import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id:"heading", className: "heading t1"}, "Hello World from Namaste React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const elem = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, [React.createElement("h1", {id: "h1"}, "I am h1 tag in namste"), React.createElement("h2", {id: "h2"}, "I am h2 tag"),]
    )
) 
root.render(elem);


//const root = ReactDOM.createRoot(document.getElementById('root'));
/*const div = React.createElement("h1", {id:"shilpa_h1", className:"h1 heading"}, "Shilpa's Heading");
root.render(div);*/