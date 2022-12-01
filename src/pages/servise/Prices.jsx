import React from "react";
import Navbar from "../../components/navbar/Navbar";
import PriceListComponent from "../../components/price_list/PriceListComponent";

const Prices = () => {
  return (
    <div className="barber-price-page">
      <Navbar />
      <main>
        <h1>Our services</h1>
        <p>Lorem ipsum dolor sit amet. </p>
      </main>
      <PriceListComponent />
    </div>
  );
};

export default Prices;
