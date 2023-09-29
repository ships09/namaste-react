const heading = React.createElement("h1", {id:"heading", className: "heading t1"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const elem = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, [React.createElement("h1", {id: "h1"}, "I am h1 tag"), React.createElement("h2", {id: "h2"}, "I am h2 tag"),]
    )
) 
root.render(elem);
console.log(elem);