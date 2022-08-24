import React from "react";
import Carousel from "../carousel/Carousel";
import "./header.css";


const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerBar">
                    <h1 className="headerTitel">Raise your level instanly</h1>
                    <button className="bookingButton">Book now</button>
                    <div className="scrollButtons">
                        <button className="leftScroll"> left arrow </button>
                        <button className="rightScroll"> right arrow </button>
                    </div>
                </div>

                <div className="interactiveContainer">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Header;