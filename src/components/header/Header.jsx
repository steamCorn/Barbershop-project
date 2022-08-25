import React, {useState} from "react";
import {Carousel} from "../carousel/Carousel";
import "./header.css";

import video from "../../assets/video.mp4";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

const SLIDER_WINDOW_WIDTH = 763; // 1024
const MAX_SLIDER_OFFSET = 2630; 

const Header = () => {
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + SLIDER_WINDOW_WIDTH;
            console.log(newOffset);
            return Math.min(newOffset, 0);
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - SLIDER_WINDOW_WIDTH;
            const maxOffset = -(MAX_SLIDER_OFFSET); 
            console.log(newOffset, maxOffset);
            return Math.max(newOffset, maxOffset);
        })
    }

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerBar">
                    <h1 className="headerTitel">Raise your level instanly</h1>
                    <button className="bookingButton">Book now</button>
                    <div className="scrollButtons">
                        <button className="leftScroll" onClick={handleLeftArrowClick}> left arrow </button>
                        <button className="rightScroll" onClick={handleRightArrowClick}> right arrow </button>
                    </div>
                </div>

                <div className="sliderContainer">
                    <Carousel offset={offset}>
                        <div className="sliderItem">
                            <video src={video} autoPlay={false} loop muted/>
                        </div>
                        <div className="sliderItem">
                            <img src={img1} />
                        </div>
                        <div className="sliderItem">
                            <img src={img2} />
                        </div>
                        <div className="sliderItem">
                            <img src={img3} />
                        </div>
                        <div className="sliderItem">
                            <img src={img4} />
                        </div>
                        <div className="sliderItem">
                            <img src={img5} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Header;