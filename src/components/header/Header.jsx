import React from "react";
import "./header.css";

const Navbar = () => {
    return (
        <div className="header">
            <div className="headerConteiner">
                <h1 className="headerTitel">Raise your level instanly</h1>
                <button className="bookingButton">Book now</button>
                <button className="scrollButton"> left arrow </button>
                <button className="scrollButton"> right arrow </button>
            </div>
        </div>
    )
}

export default Navbar;