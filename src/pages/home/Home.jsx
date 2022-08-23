import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
        </>
    )
}

export default Home;