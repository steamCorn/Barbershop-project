import React from "react";
import "./carousel.css";

import video from "../../assets/video.mp4";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

const Navbar = () => {
    return (
        <div className="sliderBlock">
            <div className="sliderItem">
                <video src={video} autoPlay loop muted/>
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
        </div>
    )
}

export default Navbar;