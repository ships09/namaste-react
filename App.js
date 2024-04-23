import React from "react";
import ReactDOM from "react-dom/client";

/************
 * Header
 *  Logo
 *  Nav items - home card
 * Footer
 *  Copyright
 *  About us 
 *  Links
 *  Contact
 * Body Component
 *  Search
 *  Restaurant Container
 *      Restaurant Cards
 *          image, name, star rating, cuisine, delivery time 
 * 
 * 
 * 
 * 
 */
const styleCard = { /*js object pass it to style attribute in {} */
    background:"pink"

}
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="https://as1.ftcdn.net/v2/jpg/07/31/22/94/1000_F_731229489_yRCbqgB3vPjVIeUwIvBKggIjlr4UTL1p.jpg" className="logo" />
            </div>
            <div className="siteName">My Food Zone </div>
            <div className="headerLinks">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search </div>
            <div className="restaurantContainer">
                <RestaurantCard restName="Madras Cafe" cuisine="South Indian" />
                <RestaurantCard restName="Burger King" cuisine="American" />
     
            </div>
        </div>
    )
}
const RestaurantCard = (props) => {  
    const {restName, cuisine} = props;
    // console.log(props);
    return (
        <div className="rest-card" >
            <img className="rest-img"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a9ecb33c07e35203eb806382efa93982" />
            <h3>{restName}</h3>
            <h4>{cuisine}</h4>
            <h4>Rating: 4.9</h4>
            <h4>25 mins</h4>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);