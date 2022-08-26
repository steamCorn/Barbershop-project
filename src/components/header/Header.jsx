import React, {useState, useRef } from "react";
import { Link } from "react-router-dom";
import {Carousel} from "../carousel/Carousel";
import "./header.css";

import video from "../../assets/video.mp4";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import { useEffect } from "react";

const SLIDER_WINDOW_WIDTH = 763; // 1024
const MAX_SLIDER_OFFSET = 2630; 

const Header = () => {
    const [offset, setOffset] = useState(0);
    const [videoPlay, setVideoPlay] = useState(false);

    const videoRef = useRef();

    // useEffect(() => {
    //     if(videoPlay) {
    //         playVideo();
    //     } 
    //     else stopVideo();
    // }, [videoPlay, playVideo, stopVideo])

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
    const handlerPlayVideo = () => {
        setVideoPlay((currentPlay) => (!currentPlay ? true : false ));
    }
    const playVideo = () => {
        videoRef.current.play();
    }
    const stopVideo = () => {
        console.log("play video")
        videoRef.current.pause();
    }
    
    console.log(videoPlay)

    return (
        <div className="header object-with-pseudo-elem">
            <div className="headerContainer">
                <div className="headerBar">
                    <h1 className="headerTitel">Raise your level instanly</h1>
                    <div className="object-with-pseudo-elem">
                        <button className="bookingButton">
                            <Link to="/booking">Book now</Link>
                        </button>
                    </div>
                    <div className="scrollButtons">
                        <button className="leftScroll" onClick={handleLeftArrowClick}> left arrow </button>
                        <button className="rightScroll" onClick={handleRightArrowClick}> right arrow </button>
                    </div>
                </div>

                <div className="sliderContainer">
                    <Carousel offset={offset}>
                        <div className="sliderItem object-with-pseudo-elem">
                            <video ref={videoRef}  autoPlay={false} loop muted>
                                <source src={video} type="video/mp4" />
                            </video>

                            <button onClick={handlerPlayVideo} className="play-bt play-bt-style">
                                {!videoPlay ? ("Play") : ("Pause")}
                            </button>
                        </div>
                        <div className="sliderItem">
                            <img src={img1} alt="Barber"/>
                        </div>
                        <div className="sliderItem">
                            <img src={img2} alt="Barber"/>
                        </div>
                        <div className="sliderItem">
                            <img src={img3} alt="Barber"/>
                        </div>
                        <div className="sliderItem">
                            <img src={img4} alt="Barber"/>
                        </div>
                        <div className="sliderItem">
                            <img src={img5} alt="Barber"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Header;