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
const styleCard = {
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
                <RestaurantCard />
            </div>
        </div>
    )
}
const RestaurantCard = () => {
    return (
        <div className="rest-card" style={styleCard}>
            <h3>Madras Cafe</h3>
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