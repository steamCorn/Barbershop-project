import React, { useState , useEffect, Children, cloneElement} from "react";
import "./carousel.css";

// import video from "../../assets/video.mp4";
// import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.jpg";
// import img3 from "../../assets/img3.jpg";
// import img4 from "../../assets/img4.jpg";
// import img5 from "../../assets/img5.jpg";

export const Carousel = ({ offset, children }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        console.log(offset);
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    },
                    
                })
            })
        )
    }, [])

    return (
        <div className="slider">
            <div 
                className="allItemsConteiner"
                style ={{
                    transform: `translateX(${offset}px)`
                }}
            >
                {pages}
            </div>
        </div>
    )
}

// export default Carousel;