import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement("h1", {id: "heading", class:"heading"}, "Namaste React");
//root.render(heading1);
//JSX is html like or xml like syntax
//React Element
const heading = (<h1 id="heading" className="heading" tabIndex="1">Namaste from JSX</h1>);

//React Functional Component
const Title = () => (

    <h1 className="heading"> Namaste React from JSX</h1>
)
//This is also a valid code
const TitleOne = function () {
    return (
        <div id="subcontainer"><h1  > Namaste React from JSX</h1></div>
    )
}
const numericvalue = 99;
const HeadingComponent = () => (
    <div id="container">
    <TitleOne></TitleOne>
    <TitleOne />
    <Title />
    {numericvalue}
    {console.log('shilpa')}
    {Title()}
    <h1 id="heading" className="heading">Namaste React from Functional Component</h1>
    </div>
)
root.render(<HeadingComponent />);