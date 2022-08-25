import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PriceComponent from "../../components/price/PriceComponent";

const Prices = () => {
    return (
        <section className="barber-price">
            <Navbar />
            <main>
                <h1>Our services</h1>
                <p>Lorem ipsum dolor sit amet. </p>
            </main>
            <nav>
                <Link to="/">Home page</Link>
            </nav>
            <PriceComponent/>
        </section>
    )
}

export default Prices;