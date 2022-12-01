import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import PriceListComponent from "../../components/price_list/PriceListComponent";

const Home = () => {
  return (
    <>
      <section id="top-barbers">
        <Navbar />
        <Header />
      </section>
      <section id="barber-price">
        <PriceListComponent />
      </section>
    </>
  );
};

export default Home;
