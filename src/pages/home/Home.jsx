import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <main>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet. Nullam non faucibus est. 
                    Ut a faucibus ligula. Nullam a condimentum justo, 
                    eget dapibus urna. Vestibulum et pulvinar urna. 
                </p>
            </main>
            <nav>
                <Link to="/team">Our Barbers</Link>
                <Link to="/booking">Make appointment</Link>
                <Link to="/prices">Our services</Link>
            </nav>

        </div>
    )
}

export default Home;