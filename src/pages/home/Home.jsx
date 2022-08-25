import React from "react";
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import PricesComponent from "../../components/price/PriceComponent";

const Home = () => {
    return (
        <>
            <section id="top-barbers">
                <Navbar />
                <Header />
            </section>
            <section className="barber-price">
                <PricesComponent />
            </section>
        </>
        
    )
}

export default Home;