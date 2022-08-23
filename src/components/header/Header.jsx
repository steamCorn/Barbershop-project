import React from "react";
import "./header.css";

const Navbar = () => {
    return (
        <div className="header">
            <div className="headerConteiner">
                <h1 className="headerTitel">Raise your level instanly</h1>
                <button className="bookingButton">Book now</button>
                <div className="scrollButtons">
                    <button className="leftScroll"> left arrow </button>
                    <button className="rightScroll"> right arrow </button>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;