import React from "react";
import "./price-list.css";

const PriceListComponent = () => {
    return (
        <>
            <div className="price-list-wraper">
                <div className="top-barber-price">
                    <h1 className="block-title">Our services</h1>
                    <div className="select">
                        <span >City</span>
                        <select className="select-style">
                            <option selected value="Amsterdam">Amsterdam</option>
                            <option value="Rotterdam">Rotterdam</option>
                            <option value="Almere">Almere</option>
                        </select>
                    </div>
                </div>
                <div className="barber-price-name price-slider">
                    <div>
                        <button>Haircut</button>
                    </div>
                    <div>
                        <button>Shave</button>
                    </div>
                    <div>
                        <button>Care</button>
                    </div>
                </div>







            <ul>
                <li>Maecenas scelerisque imperdiet fringilla.</li>
                <li>In at mattis magna</li>
                <li>Integer in mauris quis risus molestie</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Donec tempor sit amet lorem </li>
                <li>In imperdiet augue at egestas iaculis. </li>
                <li>Fusce finibus dolor ac iaculis consequat.</li>
                <li>Maecenas scelerisque imperdiet fringilla.</li>
            </ul>
            </div>
        </>
        
    )
}

export default PriceListComponent;