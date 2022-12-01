import React from "react";
import Header from "../../components/header/Header";
import PriceListComponent from "../../components/price_list/PriceListComponent";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="top-barbers">
        <Header />
      </section>
      <section id="barber-price">
        <PriceListComponent />
      </section>
    </>
  );
};

export default Home;
