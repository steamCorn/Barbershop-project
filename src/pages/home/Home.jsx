import React from "react";
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Prices from "../servise/Prices";

const Home = () => {
    return (
        <>
            <section id="top-barbers">
                <Navbar />
                <Header />
            </section>
            <section id="barber-price">
                <Prices />
            </section>
        </>
        
    )
}

export default Home;