import React, { useState , useEffect, Children, cloneElement} from "react";
import "./carousel.css";

export const Carousel = ({ offset, children }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // console.log(offset);
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        // minWidth: '100%',
                        // maxWidth: '100%',
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