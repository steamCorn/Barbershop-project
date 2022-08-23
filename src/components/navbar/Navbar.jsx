import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">BarberLogo</span>
                <div className="navItems">
                    <Link to="/" className="navButton navActive">Home</Link>
                    <Link to="/prices" className="navButton">Servicies</Link>
                    <Link to="/booking" className="navButton">Book now</Link>
                    <Link to="/team" className="navButton">Barber</Link>
                    <button className="navButton">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;